import { Account } from "./account.mjs";
import { accountDAO} from "./accountDAO.mjs";


export const accountService = {
    addAccount(lastName, firstName) {
     const account = new Account(null, lastName, firstName, null);
    accountDAO.insertAccount(account);
    return account.id;
    },

    getAccountList() {
        const accountList = accountDAO.retrieveAccountList();
        console.log(accountList);
        return accountList;
    },

    saveAccount(id, lastName, firstName) {
        const account = new Account(id, lastName, firstName);
        accountDAO.updateAccount(account);
    },

    getAccount(id) {
        console.log(accountDAO.retrieveAccount(id))
       return  accountDAO.retrieveAccount(id);
   
        
    },
  };

