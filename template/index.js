import fs from "fs";
import yaml from "js-yaml";
import { generateResources, generateJSON, generateYAML } from "../utils/helper-funcs.js";
export default class Template {
  constructor(fileFormat = "") {
    this.resources = [];
    this.formatVersion = "2010-09-09";
    this.fileFormat = fileFormat.toLowerCase();
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
    if (
      fileFormat.toLowerCase() === "json" ||
      fileFormat.toLowerCase() === "yaml"
    ) {
      this.fileFormat = fileFormat.toLowerCase();
    } else {
      // throw an error of invalid  file format
    }
  }

  //
  async generateTemplate() {
    try {
      let generatedTemplate = {}
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
