function validatePassword(password) {
  return password.length >= 8 && password.match(/[a-z]/) !== null && password.match(/[A-Z]/) !== null && password.match(/[0-9]/) !== null && password.match(/[^a-zA-Z0-9]/) !== null;
}

module.exports = {validatePassword};