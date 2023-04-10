import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  alpha_two_code: Yup
    .string()
    .min(2)
    .max(2)
    .matches(/^[A-Z]{2}$/)
    .required(),

  web_pages: Yup.array().of(Yup.string()).required(),

  name: Yup.string().required(),

  country: Yup.string().required(),

  domains: Yup.array().of(Yup.string()).required(),

  stateProvince: Yup
    .string()
    .min(2)
    .max(2)
    .matches(/^[A-Z]{2}$/),
});

export default registerSchema;
