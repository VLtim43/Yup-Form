import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
});
