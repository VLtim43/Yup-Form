import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
});
