import { Account, Currency, AccountType} from './account.module';

export class AccountService{
    accounts: Account[] = [
        new Account('UBS', AccountType.PRIVATE, 11117.60,Currency.CHF),
        new Account('Schaffhauser Kantonal bank', AccountType.PRIVATE, 6127.45,Currency.CHF),
        new Account('Credit Suisse', AccountType.SAVING, 4000.60,Currency.CHF),
        new Account('Raifeisen', AccountType.PRIVATE, -979.10,Currency.CHF),
        new Account('Raifeisen', AccountType.PRIVATE, 3000.00,Currency.CHF)
    ]

    getAccounts(){
        return this.accounts.slice();
    }

    getSum(){
        
    }
}
