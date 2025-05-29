import {ValidateFunction, ErrorObject} from "ajv/dist/jtd";

function error_template(error: ErrorObject): string {
    return `Path: ${error.instancePath}
Message: ${error.message}
Schema path: ${error.schemaPath}
${error.params ? `Params: ${JSON.stringify(error.params)}`: ''}
`;
}

export function error_details(validate: ValidateFunction<any>): string {
    return validate.errors ? validate.errors.map(error => error_template(error)).join("\n\n"): "";
}
