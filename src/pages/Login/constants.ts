import * as yup from "yup";

export interface LoginFormData {
  username: string;
  password: string;
}

export enum FORM_FIELDS {
  USERNAME = "username",
  PASSWORD = "password",
}

const field = "This field";
const requiredMessage = "This field is required";

export const validationSchema = yup.object().shape({
  [FORM_FIELDS.USERNAME]: yup.string().required(requiredMessage).label(field),
  [FORM_FIELDS.PASSWORD]: yup.string().required(requiredMessage).label(field),
});

export type SchemaType = yup.InferType<typeof validationSchema>;
