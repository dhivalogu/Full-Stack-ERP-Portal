import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
  styleUrls: ['./customer-invoice.component.css']
})
export class CustomerInvoiceComponent implements OnInit {
  video:string='assets/videos/irpa.mp4';
  constructor() { }

  ngOnInit(): void {
  }

}
