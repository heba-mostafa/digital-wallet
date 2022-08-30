import { Account } from './../../shared/account.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html'
 // styleUrls: ['./account-item.component.css']
})
export class AccountItemComponent implements OnInit {
  @Input() account: Account;
  @Input() index: number;
  
   formatNumber(): string {
    //rounds the number to two decimals and sets the apostroph
    return (this.account.amount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1\'');
  }

  ngOnInit(): void {
  }

}
