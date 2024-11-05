function validatePassword(password, options = {}) {
    const {
      minLength = 8,
      minLetters = 1,
      minDigits = 1,
      customRules = []
    } = options;
  
    const hasMinLength = password.length >= minLength;
    const hasMinLetters = (password.match(/[a-zA-Z]/g) || []).length >= minLetters;
    const hasMinDigits = (password.match(/[0-9]/g) || []).length >= minDigits;
    const hasSpecialChar = password.match(/[^a-zA-Z0-9]/) !== null;
  
    const customRulesPassed = customRules.every(rule => rule(password));
  
    return hasMinLength && hasMinLetters && hasMinDigits && hasSpecialChar && customRulesPassed;
  }
  
  module.exports = { validatePassword };