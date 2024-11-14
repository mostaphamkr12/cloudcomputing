
import  {ACCOUNT_LIST} from "./database.mjs";
import {accountSummaryList} from "./queryDatabase.mjs";
export const accountQueryDAO = {
    retrieveAccountList() {
        return accountSummaryList; ;

    },
    retrieveAccount(id) {
        const account = ACCOUNT_LIST.find((a) => a.id === id);
        const { firstName, lastName, ...rest } = account;
        return {
            name: `${firstName} ${account.lastName} `,
            ...rest
        };
    }   
};