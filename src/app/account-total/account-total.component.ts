import { Component, OnInit } from '@angular/core';
import { Account } from '../shared/account.module';
import { AccountService } from '../shared/account.service';
@Component({
  selector: 'app-account-total',
  templateUrl: './account-total.component.html',
  styleUrls: ['./account-total.component.css']
})
export class AccountTotalComponent implements OnInit {

  accounts: any;
  constructor(private accountService: AccountService) {
    this.accounts = this.accountService.getSum();
  }

  ngOnInit(): void {
  }

}
