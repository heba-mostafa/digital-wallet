import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountTotalComponent } from './account-total/account-total.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountItemComponent } from './account-list/account-item/account-item.component';
import { TranscationsListComponent } from './transcations-list/transcations-list.component';
import { TransactionItemComponent } from './transcations-list/transaction-item/transaction-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountTotalComponent,
    AccountListComponent,
    AccountItemComponent,
    TranscationsListComponent,
    TransactionItemComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
