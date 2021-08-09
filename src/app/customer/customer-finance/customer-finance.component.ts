import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer-finance',
  templateUrl: './customer-finance.component.html',
  styleUrls: ['./customer-finance.component.css']
})
export class CustomerFinanceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['customer/finance/aging']);
  }

}
