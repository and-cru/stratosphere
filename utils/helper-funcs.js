import { ResourceError } from "../utils/error.js";
import ErrorCodes from "../helpers/error-config.js";

import fs from "fs";
import _ from "lodash/array.js";
import yaml from "js-yaml";

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

export function validateAndSanitise(props, expectedProps) {
  return Object.keys(props).filter((prop) => {
    if (!Object.keys(expectedProps).includes(prop)) {
      throw new ResourceError(
        "Invalid property supplied",
        ErrorCodes.ResourceErrorCode.INVALID_PROPS,
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

export function extractRequiredProps(expectedProps) {
  return Object.keys(expectedProps).filter((prop) => {
    return expectedProps[prop].required;
  });
}

export function checkForRequiredProps(validAndSanitised, requiredProperties) {
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

export async function generateJSON(
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

export async function generateYAML(
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
