'use strict';

const { ResourceError, TemplateError } =require("../utils/error");
const ErrorCodes = require("../helpers/error-config"); 

const fs = require("fs");
const _ = require("lodash/array.js"); 
const yaml = require("js-yaml"); 

function generateResources(resourceList = []) {
  return resourceList
    .map((item) => {
      return item.createDefinition();
    })
    .reduce((obj, item) => {
      const key = Object.keys(item)[0];
      return { ...obj, [key]: item[key] };
    }, {});
}

function validateAndSanitise(props, expectedProps) {
  return Object.keys(props).filter((prop) => {
    if (!Object.keys(expectedProps).includes(prop)) {
      throw new ResourceError(
        "Invalid property supplied",
        ErrorCodes.ResoureErrorCode.INVALID_PROPS,
        "Check if the props provided much the expected props"
      );
    }

    if (!expectedProps[prop].type.includes(typeof props[prop])) {
      throw new ResourceError(
        "Property type mismatch",
        ErrorCodes.ResourceErrorCode.PROP_TYPE_MISMATCH,
        "Check if the data type for the props of the resource match the expected type"
      );
    }

    const valid = Object.keys(expectedProps).includes(prop);
    const type = expectedProps[prop].type.includes(typeof props[prop]);
    return valid && type;
  });
}

function extractRequiredProps(expectedProps) {
  return Object.keys(expectedProps).filter((prop) => {
    return expectedProps[prop].required;
  });
}

function checkForRequiredProps(validAndSanitised, requiredProperties) {
  if (_.difference(requiredProperties, validAndSanitised).length > 0) {
    throw new ResourceError(
      "Missing required property",
      ErrorCodes.ResourceErrorCode.MISSING_REQUIRED_PROPS,
      "Check if the props for the resource is missing a required prop"
    );
  }

  return (
    validAndSanitised.length > 0 &&
    _.difference(requiredProperties, validAndSanitised).length === 0
  );
}

async function generateJSON(
  formatVersion = "",
  resources = [],
  writeToFile = "",
  description = "",
  mappings = {}
) {
  try {
    // check for any limitations and throw error
    if (resources.length >= 500) {
      throw new TemplateError(
        "Max limit of resources in a template is 500",
        ErrorCodes.TemplateErrorCode.RESOURCE_LIMIT_ERROR,
        "Too many resources in this template, try and use nested stacks"
      )
    }

    let newTemplate = {
      AWSTemplateFormatVersion: formatVersion,
    };
    // add conditional elements
    if (description) {
      newTemplate = {
        ...newTemplate,
        Description: description,
      };
    }

    if (mappings) {
      newTemplate = {
        ...newTemplate,
        Mappings: mappings,
      };
    }
    // Map over resources and call createDefinition method
    const res = generateResources(resources);

    // Structure template
    newTemplate = {
      ...newTemplate,
      Resources: res,
    };

    // Generate JSON of the template
    const jsonData = JSON.stringify(newTemplate, null, 4);

    if (writeToFile) {
      await fs.writeFileSync(writeToFile, jsonData);
    }

    return newTemplate;
  } catch (err) {
    console.error(err);
  }
}

async function generateYAML(
  formatVersion = "",
  resources = [],
  writeToFile = "",
  description = "",
  mappings = {}
) {
  try {
    let newTemplate = {
      AWSTemplateFormatVersion: formatVersion,
    };
    // add conditional elements
    if (description) {
      newTemplate = {
        ...newTemplate,
        Description: description,
      };
    }

    if (mappings) {
      newTemplate = {
        ...newTemplate,
        Mappings: mappings,
      };
    }
    // Map over resources and call createDefinition method
    const res = generateResources(resources);

    // Structure template
    newTemplate = {
      ...newTemplate,
      Resources: res,
    };

    // Convert Object of Template to YAML
    const yamlDump = yaml.dump(newTemplate, {
      flowLevel: -1,
      indent: 2,
    });

    if (writeToFile) {
      await fs.writeFileSync(writeToFile, yamlDump);
    }

    return yamlDump;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  validateAndSanitise,
  extractRequiredProps,
  checkForRequiredProps,
  generateJSON,
  generateYAML
}