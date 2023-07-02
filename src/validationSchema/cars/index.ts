import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  location: yup.string().required(),
  company_id: yup.string().nullable(),
});
