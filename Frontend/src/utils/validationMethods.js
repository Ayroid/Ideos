const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!emailRegex.test(email)) {
    console.log("Email Invalid");
    return false;
  }

  return true;
};

const validatePassword = (password) => {
  if (password.length < 8) {
    console.log("Password Invalid");
    return false;
  }
  return true;
};

const validateUsername = (username) => {
  if (username.length < 4) {
    console.log("Username Invalid");
    return false;
  }
  return true;
};

export { validateEmail, validatePassword, validateUsername };
