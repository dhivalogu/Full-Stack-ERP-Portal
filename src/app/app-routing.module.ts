import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [

  { path: '', component: CustomerLoginComponent },
  { path: 'home', component: CustomerComponent ,children :[
      {path: 'profile', component: CustomerProfileComponent},
      {path: 'inquiry', component: CustomerInquiryComponent},
      {path: 'sales', component: CustomerSalesComponent},
      {path: 'delivery', component: CustomerDeliveryComponent},
      {path: 'upload', component: CustomerUploadComponent},
      {path: 'finance', component: CustomerFinanceComponent,children :[
        {path: 'debit', component: CustomerDebitComponent},
        {path: 'credit', component: CustomerCreditComponent},
        {path: 'invoice', component: CustomerInvoiceComponent},
        {path: 'salesdata', component: CustomerSalesDataComponent},
      ]}

  ] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
