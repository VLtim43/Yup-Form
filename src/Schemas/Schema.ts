import * as yup from "yup";
const phoneRegx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailRegx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
