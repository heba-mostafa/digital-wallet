import { AccountService } from './../shared/account.service';
import { Account } from './../shared/account.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts:Account[];
  constructor(private accountService:AccountService) { 
    this.accounts = this.accountService.getAccounts();
  }

  ngOnInit(): void {
  }

}
