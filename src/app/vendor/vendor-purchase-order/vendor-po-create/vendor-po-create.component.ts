import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vendor-po-create',
  templateUrl: './vendor-po-create.component.html',
  styleUrls: ['./vendor-po-create.component.css']
})
export class VendorPoCreateComponent implements OnInit {

  DOC_DATE:string='';
  COMPANY_CODE:string='';
  PURCHASE_ORG:string='';
  PURCHASE_GRP:string='';
  DELIVERY_DATE:string='';
  LOCATION:string='';
  MATERIAL:string='';
  SHORT_TEXT:string='';
  QUANTITY:string='';
  PLANT:string='';
  info:string='';
  user_id:string='';
  url1:string='';
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("vid") !== null) {
      this.router.navigate(['home']);
    }
    this.user_id= localStorage.getItem('vid')!;
  }
  update():void
  {
    this.url1=('http://localhost:3200/vendor/newpo?user_id='+this.user_id+'&COMPANY_CODE='+this.COMPANY_CODE+'&DELIVERY_DATE='+this.DELIVERY_DATE+'&DOC_DATE='+this.DOC_DATE+'&LOCATION='+this.LOCATION+'&MATERIAL='+this.MATERIAL+'&PLANT='+this.PLANT+'&PURCHASE_GRP='+this.PURCHASE_GRP+'&PURCHASE_ORG='+this.PURCHASE_ORG+'&QUANTITY='+this.QUANTITY+'&SHORT_TEXT='+this.SHORT_TEXT);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
    });
  }
}
