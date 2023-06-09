export const dropDownSchema = Yup.object().shape({
  source: Yup.string(),
  options: Yup.string().when('source', {
    is: "options",
    then: Yup.object().shape({
      label: Yup.string().required('This field is required'),
      value: Yup.string().required('This field is required'),
    }),
    otherwise: Yup.string().notRequired(),
  }),
  apiUrl: Yup.string().when('source', {
    is: "url",
    then: Yup.string().required('This field is required'),
    otherwise: Yup.number().notRequired(),
  }),
});

export const asdas = () => { }