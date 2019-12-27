const checkName = (name) => {
  if (name.length < 3) {
    return `Must be more letters`;
  }
};

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

const checkAddUserForm = (fields) => {
  console.log(fields);
  const errors = {};
  for (let key in fields) {
    switch (key) {
      case 'name': {
        if (checkName(fields.name.current.value)) {
          errors.name = checkName(fields.name.current.value);
        }
        break;
      }
      case 'lastName': {
        if (checkName(fields.lastName.current.value)) {
          errors.lastName = checkName(fields.lastName.current.value);
        }
        break;
      }
      default:
        break;
    }
  }

  if (isEmpty(errors)) {
    return null;
  }

  return errors;
};

export { checkAddUserForm, isEmpty };
