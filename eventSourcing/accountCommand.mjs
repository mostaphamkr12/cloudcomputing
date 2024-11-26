import { Account} from "./account.mjs";
import {accountCommandDAO} from './accoutCommandDAO.mjs';
import { Event } from "./event.mjs";




export const accountCommand = {
    addAccount(lastName, firstName) {
      const account = new Account(null, lastName, firstName, null);
      const event = new Event('AccountCreated', account, account.id);
        return accountCommandDAO.saveAccount(account,event);
    },

   
   updateAccount(id, lastName, firstName) {
        const account =  accountCommandDAO.retrieveAccount(id);
        account.lastName = lastName;
        account.firstName = firstName
        const event = new Event('AccountUpdated', account, account.id);
        return accountCommandDAO.updateAccount(account,event);
    }
};