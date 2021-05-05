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
import { CustomerAgingComponent } from './customer/customer-finance/customer-aging/customer-aging.component';
import {VendorLoginComponent} from './vendor/vendor-login/vendor-login.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorRfqComponent } from './vendor/vendor-rfq/vendor-rfq.component';
import { VendorPurchaseOrderComponent } from './vendor/vendor-purchase-order/vendor-purchase-order.component';
import { VendorGoodsReceiptComponent } from './vendor/vendor-goods-receipt/vendor-goods-receipt.component';
import { VendorFinanceComponent } from './vendor/vendor-finance/vendor-finance.component';
import { VendorCreditComponent } from './vendor/vendor-finance/vendor-credit/vendor-credit.component';
import { VendorDebitComponent } from './vendor/vendor-finance/vendor-debit/vendor-debit.component';
import { VendorInvoiceComponent } from './vendor/vendor-finance/vendor-invoice/vendor-invoice.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component';
import { VendorAgingComponent } from './vendor/vendor-finance/vendor-aging/vendor-aging.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'clogin', component: CustomerLoginComponent },
  { path: 'customer', component: CustomerComponent ,children :[
      {path: 'profile', component: CustomerProfileComponent},
      {path: 'inquiry', component: CustomerInquiryComponent},
      {path: 'sales', component: CustomerSalesComponent},
      {path: 'delivery', component: CustomerDeliveryComponent},
      {path: 'upload', component: CustomerUploadComponent},
      {path: 'finance', component: CustomerFinanceComponent,children :[
        {path: 'debit', component: CustomerDebitComponent},
        {path: 'credit', component: CustomerCreditComponent},
        {path: 'aging', component: CustomerAgingComponent},
        {path: 'invoice', component: CustomerInvoiceComponent},
        {path: 'salesdata', component: CustomerSalesDataComponent},
      ]}

  ] },
  { path: 'vlogin', component: VendorLoginComponent },
  { path: 'vendor', component: VendorComponent,children :[
    {path: 'profile', component: VendorProfileComponent},
    {path: 'quotation', component: VendorRfqComponent},
    {path: 'purchaseorder', component: VendorPurchaseOrderComponent},
    {path: 'goods', component: VendorGoodsReceiptComponent},
    {path: 'finance', component: VendorFinanceComponent,children :[
      {path: 'debit', component: VendorDebitComponent},
      {path: 'credit', component: VendorCreditComponent},
      {path: 'aging', component: VendorAgingComponent},
      {path: 'invoice', component: VendorInvoiceComponent},
    ]}

]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
