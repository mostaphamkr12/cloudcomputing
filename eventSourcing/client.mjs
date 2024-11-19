import {accountQuery} from './accountQuery.mjs';
import { accountCommand } from './accountCommand.mjs';

const account =accountCommand.addAccount("Doe", "John");
accountCommand.updateAccount(account.id, "ef", "Jfe");
console.log(accountQuery.getAccountList());
console.log(accountQuery.getAccount(account.id));