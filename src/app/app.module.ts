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
import { NgxPaginationModule} from  'ngx-pagination';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeLeavedataComponent } from './employee/employee-leavedata/employee-leavedata.component';
import { EmployeePayslipComponent } from './employee/employee-payslip/employee-payslip.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { EmployeeLeavecreateComponent } from './employee/employee-leavedata/employee-leave/employee-leavecreate/employee-leavecreate.component';
import {NgxPrintModule} from 'ngx-print';
import { EmployeeLeaveComponent } from './employee/employee-leavedata/employee-leave/employee-leave.component';
import { EmployeeLeaveBalanceComponent } from './employee/employee-leavedata/employee-leave-balance/employee-leave-balance.component';
import { VendorPoCreateComponent } from './vendor/vendor-purchase-order/vendor-po-create/vendor-po-create.component';
import { EmployeeFnfComponent } from './employee/employee-fnf/employee-fnf.component';
import { EmployeeNoticeComponent } from './employee/employee-fnf/employee-notice/employee-notice.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeePayrollComponent } from './employee/employee-payroll/employee-payroll.component';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VendorInvlistComponent } from './vendor-invlist/vendor-invlist.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,CustomerComponent,CustomerLoginComponent,CustomerDeliveryComponent,CustomerInquiryComponent,CustomerFinanceComponent,CustomerProfileComponent,CustomerSalesComponent,CustomerDebitComponent,CustomerCreditComponent,CustomerUploadComponent, CustomerInvoiceComponent, CustomerSalesDataComponent, Spinner1Component, CustomerAgingComponent, VendorLoginComponent, VendorComponent, VendorRfqComponent, VendorPurchaseOrderComponent, VendorGoodsReceiptComponent, VendorFinanceComponent, VendorCreditComponent, VendorDebitComponent, VendorInvoiceComponent, VendorProfileComponent, VendorAgingComponent, LandingPageComponent, EmployeeComponent, EmployeeProfileComponent, EmployeeLeavedataComponent, EmployeePayslipComponent, EmployeeLoginComponent, EmployeeLeavecreateComponent, EmployeeLeaveComponent, EmployeeLeaveBalanceComponent, VendorPoCreateComponent, EmployeeFnfComponent, EmployeeNoticeComponent, EmployeeDashboardComponent, EmployeePayrollComponent, VendorInvlistComponent, CustomerDashboardComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,NgxPaginationModule,NgxPrintModule,PdfViewerModule,NgxExtendedPdfViewerModule
  ],
  providers: [NgxExtendedPdfViewerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
