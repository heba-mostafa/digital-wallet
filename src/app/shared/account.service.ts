import { Injectable } from '@angular/core';
import { Account, Currency, AccountType } from './account.module';
@Injectable()
export class AccountService {
    accounts: Account[] = [
        new Account('https://toppng.com/uploads/preview/ubs-logo-vector-free-download-11573938916en3y3mpfwj.png', 'UBS', AccountType.PRIVATE, 11117.99, Currency.CHF),
        new Account('https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/lhy7h6ap9y0r7ccwjc9n', 'Schaffhauser Kantonal bank', AccountType.PRIVATE, 6127.45, Currency.CHF),
        new Account('https://towerpointwealth.com/wp-content/uploads/2018/07/Credit_Suisse_Towerpoint_Wealth_Partners..png', 'Credit Suisse', AccountType.SAVING, 4000.60, Currency.CHF),
        new Account('https://cdn1-assets.baam.ch/uploads/logo_image_item/file/491442df5f88c6aa018e86dac21d3606/1475229241/raiffeisen-schweiz-logo-talendo.png', 'Raifeisen', AccountType.PRIVATE, -979.10, Currency.CHF),
        new Account('https://cdn1-assets.baam.ch/uploads/logo_image_item/file/491442df5f88c6aa018e86dac21d3606/1475229241/raiffeisen-schweiz-logo-talendo.png', 'Raifeisen', AccountType.PRIVATE, 3000.00, Currency.CHF)/*,
        new Account('Raifeisen','Raifeisen', AccountType.PRIVATE, -234266.24,Currency.CHF)*/
    ]

    getAccounts() {
        return this.accounts.slice();
    }

    getCurrencySum(){
        if(this.accounts[0]){
            return this.accounts[0].currency
        }else{
            return Currency.CHF;
        }
        
    }

    getSum() {
        let accountArr = this.accounts;
        let accountSum = 0;

        for (let i = 0; i < accountArr.length; i++) {
            accountSum += accountArr[i].amount;
        }
        return (Math.ceil(accountSum * 20 - 0.5) / 20).toFixed(2);
    }

    getAccountsRounded() {
        let accountArr = this.accounts;
        for (let i = 0; i < accountArr.length; i++) {
            let adjustedNr = Math.ceil(accountArr[i].amount * 20 - 0.5) / 20;
            accountArr[i].amount = adjustedNr;
            console.log(adjustedNr)
        }
        return accountArr;
    }
}
