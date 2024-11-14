import {accountQueryDAO } from "./accountQueryDAO.mjs";
import { Account } from "./account.mjs";

export const accountQuery = {
    getAccountList() {
        return  accountQueryDAO.retrieveAccountList();
    },
    getAccount(id) {
        return  accountQueryDAO.retrieveAccount(id);
    }
};