import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";
export class UpdateUserDto {
    email: string;
    password: string;
    nickname: string;
    phone: string;
}

const schema: JSONSchemaType<UpdateUserDto> = {
    type: "object",
    properties: {
        email: { type: "string", format: "email" },
        password: { type: "string", minLength: 8 },
        nickname: { type: "string", minLength: 2, maxLength: 30 },
        phone: { type: "string", pattern: "^\\+?[1-9]\\d{1,14}$" }
    },
    required: [],
    additionalProperties: false
};

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);

export function validateCreateUserDto(data: UpdateUserDto): data is UpdateUserDto {
    if (validate(data)) {
        return true;
    } else {
        console.log(validate.errors);
        return false;
    }
}