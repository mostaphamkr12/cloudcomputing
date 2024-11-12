import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);
  },
retrieveAccountList() {
         return ACCOUNT_LIST.map(({ creationDate, ...rest }) => rest);
    },
  
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index].firstName=account.firstName;
      ACCOUNT_LIST[index].lastName=account.lastName;
      console.log(ACCOUNT_LIST);
    }
  },
  retrieveAccount(id) {
    const account= ACCOUNT_LIST.find((a) => a.id === id);
    const {firstName , lastName,  ...rest }=account;
   
    return {
        name : `${firstName} ${account.lastName} `,
        ...rest 
};
}
}