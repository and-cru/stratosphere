'use strict';

const { generateJSON, generateYAML } = require("../utils/helper-funcs");
const { TemplateError } = require("../utils/error");
const ErrorCodes = require("../helpers/error-config");

class Template {
  constructor(fileFormat = "") {
    this.resources = [];
    this.formatVersion = "2010-09-09";
    this.fileFormat = fileFormat.toLowerCase().trim();
  }

  // Method to add a resource to the template
  addResource(resource) {
    this.resources.push(resource);
  }

  // set some common variables - for now Description and Mappings
  setDescription(description = "") {
    this.description = description;
  }

  setMappings(mappings = {}) {
    this.mappings = mappings;
  }

  setFileLocation(fileDir = "") {
    this.fileLocation = fileDir;
  }

  setName(name = "") {
      this.name = name
  }

  setFileFormat(fileFormat = "") {
    this.fileFormat = fileFormat.toLowerCase().trim();
  }

  //
  async generateTemplate() {
    try {
      let generatedTemplate = {}
      // check if resources provided
      if (this.resources.length === 0) {
        throw new TemplateError(
          "No resources specified",
          ErrorCodes.TemplateErrorCode.NO_RESOURCES_PROVIDED,
          "Please add some resources to the template"
        )
      }

      if (!(this.fileFormat === 'json' || this.fileFormat === 'yaml')) {
        throw new TemplateError(
          "File format either not specified or incorrect",
          ErrorCodes.TemplateErrorCode.INCORRECT_FORMAT_PROVIDED,
          "Please ensure file format is either JSON or YAML"
        )
      }

      // Template with file output location
      if (this.fileFormat === "json") {
        generatedTemplate = await generateJSON(
          this.formatVersion, 
          this.resources,
          this.fileLocation ? `${this.fileLocation}/${this.name}.json` : null,
          this.description ? this.description : null,
          this.mappings ? this.mappings : null
        )
      } else {
        generatedTemplate = await generateYAML(
          this.formatVersion,
          this.resources,
          this.fileLocation ? `${this.fileLocation}/${this.name}.yaml` : null,
          this.description ? this.description : null,
          this.mappings ? this.mappings : null
        )
      }
      return generatedTemplate;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports.Template = Template