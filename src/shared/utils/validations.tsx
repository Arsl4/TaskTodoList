import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  password: Yup.string().trim().required('Password Required'),
  email: Yup.string()
    .trim()
    .required('Email Required')
    .email('Email must be valid'),
});

export const AddTaskSchema = Yup.object().shape({
  endDate: Yup.string().when('status', {
    is: 'duedate',
    then: Yup.string().required('End Date is Required'),
    otherwise: Yup.string().notRequired(),
  }),
  startDate: Yup.string().when('status', {
    is: 'duedate',
    then: Yup.string().required('Start Date is Required'),
    otherwise: Yup.string().notRequired(),
  }),
  status: Yup.string().required('Status Required'),
  taskDescription: Yup.string().required('Description Required'),
  taskTitle: Yup.string().required('Title Required'),
  issuedate: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});
