import * as yup from "yup";
const phoneRegx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegx, "Phone number is not valid"),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegx, "Not a valid email"),
});
