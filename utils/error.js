export class TemplateError extends Error {
    constructor(description, code) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
      
        this.code = code
      
        Error.captureStackTrace(this);
    }
}

export class ResourceError extends Error {
    constructor(description, code) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
      
        this.code = code
      
        Error.captureStackTrace(this);
    }
}