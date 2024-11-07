// bank.test.js

const bankDAO = require('./bankDAO');
const bank = require('./bank');

test('retrieveBalance receives the correct accountId', () => {
  // Mock de la fonction retrieveBalance
  bankDAO.retrieveBalance = jest.fn();

  // Appel de getBalance avec un accountId spécifique
  const accountId = 12345;
  bank.getBalance(accountId);

  // Vérifie que retrieveBalance a été appelée avec le bon paramètre
  expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(accountId);
});

test('getBalance returns the correct balance', () => {
  // Mock de la fonction retrieveBalance pour retourner un solde spécifique
  bankDAO.retrieveBalance = jest.fn().mockReturnValue(1000);

  // Appel de getBalance et vérification du solde retourné
  const balance = bank.getBalance(12345);
  expect(balance).toBe(1000);
});
