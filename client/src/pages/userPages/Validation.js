const Validation = (values) => {
  const validatePhoneNumber = (phoneNumber) => {
    const numberRegex = /^(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;
    return numberRegex.test(phoneNumber);
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  }
  if (!values.fullName) {
    errors.fullName = "Full Name is required";
  } else if (values.fullName.length < 3) {
    errors.fullName = "Full Name must be more than 3 characters";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is required";
  } else if (!validatePhoneNumber(values.phoneNumber)) {
    errors.phoneNumber = "Phone Number is invalid";
  }

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  } else if (values.firstName.length < 3) {
    errors.firstName = "First Name must be more than 3 characters";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Last Name must be more than 3 characters";
  }

  return errors;
};

export default Validation;
