const {  validatePassword  } = require('./passWordValidator.js');


test('Password should have at least 8 characters', () => {
    const isValid=validatePassword("aZ1*bcde");
    expect(isValid).toBe(true);
});

