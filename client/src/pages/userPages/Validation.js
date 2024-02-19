const Validation = (values) => {
  const validatePhoneNumber = (phoneNumber) => {
    const numberRegex = /^(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;
    return numberRegex.test(phoneNumber);
  };

  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
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

  return errors;
};

export default Validation;
