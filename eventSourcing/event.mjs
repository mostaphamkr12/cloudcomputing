

export class Event {
    constructor(name, payload, accountId) {
        this.name = name;
        this.payload = payload;
        this.accountId = accountId;
        this.creationDate = new Date();
    }
}