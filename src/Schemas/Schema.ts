import * as yup from "yup";
const phoneRegx = /^\d{12}$/;
const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .test("isValid", "Phone number is not valid", (val) => {
      const strippedValue = (val || "").replace(/\D/g, "");
      return phoneRegx.test(strippedValue);
    }),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegx, "Not a valid email"),
});
