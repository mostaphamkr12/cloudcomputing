// FILE: accountCommandDAO.mjs
import { ACCOUNT_LIST } from './database.mjs';
import { accountSummaryList} from './queryDatabase.mjs';
import { accountCache} from './cache.mjs';
import { eventList,addEvent} from './eventStore.mjs'


export const accountCommandDAO = {
    saveAccount(account,event) {
        ACCOUNT_LIST.push(account);
        const { creationDate, ...rest} = account;
        accountSummaryList.push(rest);
        addEvent(event);
        console.log(eventList);
        accountCache[account.id] = {name:`${account.firstName} ${account.lastName}`};
        //console.log(accountCache);
       // console.log(ACCOUNT_LIST);
        //console.log(accountSummaryList);
        return account;
    },
    updateAccount(account,event) {
        const index = ACCOUNT_LIST.findIndex(acc => acc.id === account.id);
        if (index !== -1) {
            ACCOUNT_LIST[index] = account;
            const { creationDate, ...rest} = account;
            accountCache[account.id] = {name:`${account.firstName} ${account.lastName}`};
            addEvent(event);
            console.log(eventList);
            console.log(accountCache);
            accountSummaryList[index] = rest;
            console.log(ACCOUNT_LIST);
            console.log(accountSummaryList);
            console.log(eventList);
            return account; 
        }
        return null;
    },
    retrieveAccount(id) {
        const EventsById=eventList.find(event => event.id === id);
        const latestEvent = EventsById[EventsById.length-1];
        let account ;
        switch(latestEvent.name){
            case 'AccountCreated':
                account = lastestEvent.payload;
                break;
            case 'AccountUpdated':
                account.firstName = latestEvent.payload.firstName;
                account.lastName = latestEvent.payload.lastName
                break;
            default:
                account = null;
        }
        return account;   }
}