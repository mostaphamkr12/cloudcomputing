import { accountService } from "./accountService.mjs";



const accountId = accountService.addAccount("Doe", "John");
accountService.getAccountList()
accountService.saveAccount( accountId, "fee", "Jefene");
accountService.getAccount(accountId);

