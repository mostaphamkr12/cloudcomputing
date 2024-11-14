import { Account} from "./account.mjs";
import {accountCommandDAO} from './accoutCommandDAO.mjs';



export const accountCommand = {
    addAccount(lastName, firstName) {
      const account = new Account(null, lastName, firstName, null);
        return accountCommandDAO.saveAccount(account);
    },

   
   updateAccount(id, lastName, firstName) {
        const account =  accountCommandDAO.retrieveAccount(id);
        account.lastName = lastName;
        account.firstName = firstName
        return accountCommandDAO.updateAccount(account);
    }
};