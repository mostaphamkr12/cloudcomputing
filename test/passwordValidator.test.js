const { validatePassword } = require('./passwordValidatorV1.js');

test('Password should have at least 8 characters', () => {
    const password = "12eA35%6";
    expect(validatePassword(password)).toBe(true);
});