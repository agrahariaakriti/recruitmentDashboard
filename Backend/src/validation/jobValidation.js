const validateJob = (data) => {
  const errors = {};
  if (!data.title) errors.title = 'Title is required';
  if (!data.department) errors.department = 'Department is required';
  if (!data.location) errors.location = 'Location is required';
  if (!data.description) errors.description = 'Description is required';
  return { isValid: Object.keys(errors).length === 0, errors };
};

module.exports = { validateJob };
