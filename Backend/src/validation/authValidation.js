const validateRegister = (data) => {
  const errors = {};
  if (!data.name) errors.name = 'Name is required';
  if (!data.email) errors.email = 'Email is required';
  if (!data.password || data.password.length < 6) errors.password = 'Password must be at least 6 characters';
  return { isValid: Object.keys(errors).length === 0, errors };
};

const validateLogin = (data) => {
  const errors = {};
  if (!data.email) errors.email = 'Email is required';
  if (!data.password) errors.password = 'Password is required';
  return { isValid: Object.keys(errors).length === 0, errors };
};

module.exports = { validateRegister, validateLogin };
