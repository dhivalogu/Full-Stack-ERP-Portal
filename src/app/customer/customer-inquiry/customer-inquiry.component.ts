import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-customer-inquiry',
  templateUrl: './customer-inquiry.component.html',
  styleUrls: ['./customer-inquiry.component.css']
})
export class CustomerInquiryComponent implements OnInit {
  displayedColumns: string[] = ['DOC_NUMBER', 'ITM_NUMBER','MATERIAL','CREAT_DATE','SHORT_TEXT','REQ_QTY','CURRENCY','NET_PRICE'];
  user_id:string='';
  password:string='';
  url1:string='';
  info:string='';
  auth1:string='';
  login:any=[];
  fname:string='';
  lname:string='';
  country:string='';
  city:string='';
  postal:string='';
  region:string='';
  street:string='';
  address:string='';
  mobile:string='';
  editable:boolean=false;
  dataSource:any=[];
  
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("id") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('id')!;
    this.url1=('http://localhost:3200/inquiry?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.login.push(auth);
      console.log(this.login);
      for(var i=0;i<this.login[0].length;i++)
      {
      this.login[0][i].DOC_NUMBER=this.login[0][i].DOC_NUMBER[0];
      this.login[0][i].ITM_NUMBER=this.login[0][i].ITM_NUMBER[0];
      this.login[0][i].MATERIAL=this.login[0][i].MATERIAL[0];
      this.login[0][i].SHORT_TEXT=this.login[0][i].SHORT_TEXT[0];
      this.login[0][i].CREAT_DATE=this.login[0][i].CREAT_DATE[0];
      this.login[0][i].REQ_QTY=this.login[0][i].REQ_QTY[0];
      this.login[0][i].NET_PRICE=this.login[0][i].NET_PRICE[0];
      this.login[0][i].CURRENCY=this.login[0][i].CURRENCY[0];
     }
      console.log(this.login[0]);
      this.dataSource = this.login[0];
    });   
  }

}
