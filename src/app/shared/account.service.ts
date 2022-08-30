import { Injectable } from '@angular/core';
import { Account, Currency, AccountType} from './account.module';
@Injectable()
export class AccountService{
    accounts: Account[] = [
        new Account('UBS', AccountType.PRIVATE, 11117.60,Currency.CHF),
        new Account('Schaffhauser Kantonal bank', AccountType.PRIVATE, 6127.45,Currency.CHF),
        new Account('Credit Suisse', AccountType.SAVING, 4000.60,Currency.CHF),
        new Account('Raifeisen', AccountType.PRIVATE, -979.10,Currency.CHF),
        new Account('Raifeisen', AccountType.PRIVATE, 3000.00,Currency.CHF)/*,
        new Account('Raifeisen', AccountType.PRIVATE, -23266.80,Currency.CHF)*/
    ]

    getAccounts(){
        return this.accounts.slice();
    }

    getSum(){
        let accountArr = this.accounts;
        let accountSum = 0;

        for(let i = 0; i < accountArr.length; i++){
           accountSum += accountArr[i].amount;
        }
        return accountSum.toFixed(2);
     }
}
