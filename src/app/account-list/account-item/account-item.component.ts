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
  

  ngOnInit(): void {
  }

}
