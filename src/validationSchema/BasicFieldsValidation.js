import * as Yup from 'yup';
import { DROPDOWN } from '../utils/componentTypes';
import { dropDownSchema } from "./DropdownFieldValidation"

export const basicValidationFunction = (formType,validationRequried) => {
  const BasicSchema = Yup.object().shape({
    label: Yup.string().required('This field is required'),
    name: Yup.string().required('This field is required'),

    ...(formType === DROPDOWN ? dropDownSchema : {}).defined(),
    isRequried: Yup.boolean(),
    validationMessage: Yup.string().when('isRequried', {
      is: true,
      then: Yup.number().positive('This field is required'),
      otherwise: Yup.number().notRequired(),
    }),
  })
  return BasicSchema
}
