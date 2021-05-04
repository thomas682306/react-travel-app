export default function validateInfo(values:any) {
  let errors:any = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.confirm_password) {
    errors.confirm_password = 'Password is required';
  } else if (values.confirm_password !== values.password) {
    errors.confirm_password = 'Passwords do not match';
  }
  
  return errors;

}
