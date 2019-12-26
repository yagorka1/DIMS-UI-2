import * as yup from 'yup';

const schema = yup.object({
  firstName: yup
    .string()
    .min(3, 'Minimum length 3 letters')
    .max(25, 'Maximum length 25 letters')
    .matches(/(^[A-Za-zА-Яа-я]+$)/, 'Only letters here')
    .required(),
  lastName: yup
    .string()
    .min(3, 'Minimum length 3 letters')
    .max(25, 'Maximum length 25 letters')
    .matches(/(^[A-Za-zА-Яа-я]+$)/, 'Only letters here')
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  education: yup
    .string()
    .min(3, 'Minimum length 3 letters')
    .required(),
  university: yup
    .string()
    .min(3, 'Minimum length 3 letters')
    .required(),
  address: yup
    .string()
    .min(3, 'Minimum length 3 letters')
    .required(),
  mathScore: yup
    .number('')
    .min(0)
    .max(100)
    .required(),
  mobilePhone: yup
    .number()
    .min(1000000, 'Minimum length 7')
    .required(),
  skype: yup
    .string()
    .min(3, 'Minimum length 3')
    .required(),
  birthDay: yup.string().required(),
  startData: yup.string().required(),
  age: yup
    .number()
    .min(18)
    .required(),
  direction: yup
    .string()
    .min(3, 'Minimum length 3')
    .required(),
});

export { schema };
