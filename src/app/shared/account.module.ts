export class Account {
    constructor(public logo:string, public bank:string,public type: AccountType, public amount:number, public currency: Currency){}
}
export const enum Currency{
    CHF = "CHF",
    EUR = "EUR",
    USD = "$"
}

export const enum AccountType{
    PRIVATE = "private account",
    SAVING = "saving account"    
}