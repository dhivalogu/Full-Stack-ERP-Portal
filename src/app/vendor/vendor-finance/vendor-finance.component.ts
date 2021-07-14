import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vendor-finance',
  templateUrl: './vendor-finance.component.html',
  styleUrls: ['./vendor-finance.component.css']
})
export class VendorFinanceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['vendor/finance/invoicelist']);
  }

}
