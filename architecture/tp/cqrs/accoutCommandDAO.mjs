// FILE: accountCommandDAO.mjs
import { ACCOUNT_LIST } from './database.mjs';
import { accountSummaryList} from './queryDatabase.mjs';
import { accountCache} from './cache.mjs';

export const accountCommandDAO = {
    saveAccount(account) {
        ACCOUNT_LIST.push(account);
        const { creationDate, ...rest} = account;
        accountSummaryList.push(rest);
        accountCache[account.id] = {name:`${account.firstName} ${account.lastName}`};
        console.log(accountCache);
        console.log(ACCOUNT_LIST);
        console.log(accountSummaryList);
        return account;
    },
    updateAccount(account) {
        const index = ACCOUNT_LIST.findIndex(acc => acc.id === account.id);
        if (index !== -1) {
            ACCOUNT_LIST[index] = account;
            const { creationDate, ...rest} = account;
            accountCache[account.id] = {name:`${account.firstName} ${account.lastName}`};
            console.log(accountCache);
            accountSummaryList[index] = rest;
            console.log(ACCOUNT_LIST);
            console.log(accountSummaryList);
            return account; 
        }
        return null;
    },
    retrieveAccount(id) {
        return ACCOUNT_LIST.find(account => account.id === id);
    }
};