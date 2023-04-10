import * as Yup from "yup";

const updateSchema = Yup.object().shape({
  name: Yup.string(),
  web_pages: Yup.array().of(Yup.string()),
  domains: Yup.array().of(Yup.string()),
});

export default updateSchema;



