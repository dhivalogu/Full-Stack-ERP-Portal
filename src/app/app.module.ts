import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import {CustomerDeliveryComponent} from './customer/customer-delivery/customer-delivery.component';
import {CustomerInquiryComponent} from './customer/customer-inquiry/customer-inquiry.component';
import {CustomerFinanceComponent} from './customer/customer-finance/customer-finance.component';
import {CustomerProfileComponent} from './customer/customer-profile/customer-profile.component';
import {CustomerSalesComponent} from './customer/customer-sales/customer-sales.component';
import {CustomerDebitComponent} from './customer/customer-finance/customer-debit/customer-debit.component';
import {CustomerCreditComponent} from './customer/customer-finance/customer-credit/customer-credit.component';
import {CustomerUploadComponent} from './customer/customer-upload/customer-upload.component';
import { CustomerInvoiceComponent } from './customer/customer-finance/customer-invoice/customer-invoice.component';
import { CustomerSalesDataComponent } from './customer/customer-finance/customer-sales-data/customer-sales-data.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Spinner1Component } from './shared/spinner1/spinner1.component';
@NgModule({
  declarations: [
    AppComponent,CustomerComponent,CustomerLoginComponent,CustomerDeliveryComponent,CustomerInquiryComponent,CustomerFinanceComponent,CustomerProfileComponent,CustomerSalesComponent,CustomerDebitComponent,CustomerCreditComponent,CustomerUploadComponent, CustomerInvoiceComponent, CustomerSalesDataComponent, Spinner1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
