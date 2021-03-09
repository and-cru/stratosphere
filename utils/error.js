export class ResourceError extends Error {
    constructor(description, code, fix) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
      
        this.code = code;
        this.fix = fix;
    }
}

export class TemplateError extends Error {
    constructor(description, code, fix) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
      
        this.code = code;
        this.fix = fix;
    }
}