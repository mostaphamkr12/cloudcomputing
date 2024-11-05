

const  {validatePassword}= require('./passwordValidatorV1.js');



test('Password should have at least 8 characters', () => {
    var password = "12ee345%6";
    expect(validatePassword(password)).toBe(true);
}
);

test('Password should be valid', () => {
    const password = "aZ1*bcde";
    assert.strictEqual(validatePassword(password), true);
});