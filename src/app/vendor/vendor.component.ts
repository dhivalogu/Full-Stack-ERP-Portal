import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  logo:string='assets/images/logo.png';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['vendor/dashboard']);
  }
  
  logout():void
  {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
