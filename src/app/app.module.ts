import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { ProjectComponent } from './project/project.component';
import { ExpenseComponent } from './expense/expense.component';
import { BillComponent } from './bill/bill.component';
import { PayerComponent } from './payer/payer.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { ProjectService } from './project/project.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PaymentComponent,
    ProjectComponent,
    ExpenseComponent,
    BillComponent,
    PayerComponent,
    ReceiverComponent
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
