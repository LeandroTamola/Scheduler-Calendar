import * as yup from "yup";

export interface EventFormData {
  title: string;
  start_time: string;
  end_time: string;
  address: string;
  status: "pending" | "done" | "in-progress";
}

export enum FORM_FIELDS {
  TITLE = "title",
  START_TIME = "start_time",
  END_TIME = "end_time",
  ADDRESS = "address",
  STATUS = "status",
}

const field = "This field";
const requiredMessage = "This field is required";

export const validationSchema = yup.object().shape({
  [FORM_FIELDS.TITLE]: yup.string().required(requiredMessage).label(field),
  [FORM_FIELDS.START_TIME]: yup.date().required(requiredMessage).label(field),
  [FORM_FIELDS.END_TIME]: yup
    .date()
    .min(yup.ref(FORM_FIELDS.START_TIME), "End date can't be before start date")
    .required(requiredMessage)
    .label(field),
  [FORM_FIELDS.ADDRESS]: yup.string().label(field),
  [FORM_FIELDS.STATUS]: yup.string().label(field),
});

export type SchemaType = yup.InferType<typeof validationSchema>;
