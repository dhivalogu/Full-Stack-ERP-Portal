import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-sales-data',
  templateUrl: './customer-sales-data.component.html',
  styleUrls: ['./customer-sales-data.component.css']
})
export class CustomerSalesDataComponent implements OnInit {
  sale1:string='assets/images/newplot.png';
  sale2:string='assets/images/newplot (1).png';
  sale3:string='assets/images/newplot (2).png';
  sale4:string='assets/images/newplot (3).png';
  sale5:string='assets/images/newplot (4).png';
  sale6:string='assets/images/newplot (5).png';

  constructor() { }

  ngOnInit(): void {
  }

}
