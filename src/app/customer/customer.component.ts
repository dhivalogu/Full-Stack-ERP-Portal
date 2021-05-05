import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  logo:string='assets/images/logo.png';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['customer/profile']);
  }
  
  logout():void
  {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
