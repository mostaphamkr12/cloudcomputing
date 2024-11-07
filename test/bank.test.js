// bank.test.js

const bankDAO = require('./bankDAO');
const bank = require('./bank');

test('retrieveBalance is called but not executed', () => {
  // Mock de la fonction retrieveBalance
  bankDAO.retrieveBalance = jest.fn();

  // Appel de la fonction getBalance
  bank.getBalance();

  // Vérifie que retrieveBalance a été appelée
  expect(bankDAO.retrieveBalance).toHaveBeenCalled();
});
