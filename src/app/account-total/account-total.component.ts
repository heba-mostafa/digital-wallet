import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Account } from '../shared/account.module';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-account-total',
  templateUrl: './account-total.component.html',
  styleUrls: ['./account-total.component.css']
})
export class AccountTotalComponent implements OnInit {
  accounts: any;
  currency: string;
  logoLink: string;
  resDate :any;
  
  
  constructor(private accountService: AccountService) {
    this.accounts = this.accountService.getSum();
    this.currency = this.accountService.getCurrencySum()
    this.resDate = formatDate(new Date(), 'dd.MM.yyyy','en');
  }

   formatNumber(): string {
    //sets the apostroph
    return (this.accounts).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1\'');
  }

  ngOnInit(): void {
  }

}
