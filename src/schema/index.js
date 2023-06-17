import * as yup from "yup";

export const validation = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("ⓘ Email is required"),
    name: yup
      .string()
      .max(64)
      .min(3)
      .required("ⓘ Name is required"),
    message: yup
      .string()
      .min(3)
      .required("ⓘ Message is required"),
  });