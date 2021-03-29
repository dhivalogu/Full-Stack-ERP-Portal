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
  url1:string='';
  info:string='';
  auth1:string='';
  rdata:any=[];
  dataSource:any=[];
  display:boolean=true;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.info = 'No Inquiry Details Found For This Customer ID!';
 }, 3000);
    if (localStorage.getItem("id") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('id')!;
    this.url1=('http://localhost:3200/inquiry?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      for(var i=0;i<this.rdata[0].length;i++)
      {
      this.rdata[0][i].DOC_NUMBER=this.rdata[0][i].DOC_NUMBER[0];
      this.rdata[0][i].ITM_NUMBER=this.rdata[0][i].ITM_NUMBER[0];
      this.rdata[0][i].MATERIAL=this.rdata[0][i].MATERIAL[0];
      this.rdata[0][i].SHORT_TEXT=this.rdata[0][i].SHORT_TEXT[0];
      this.rdata[0][i].CREAT_DATE=this.rdata[0][i].CREAT_DATE[0];
      this.rdata[0][i].REQ_QTY=this.rdata[0][i].REQ_QTY[0];
      this.rdata[0][i].NET_PRICE=this.rdata[0][i].NET_PRICE[0];
      this.rdata[0][i].CURRENCY=this.rdata[0][i].CURRENCY[0];
     }
      this.dataSource = this.rdata[0];
      this.display=!this.display
    });   
  }

}
