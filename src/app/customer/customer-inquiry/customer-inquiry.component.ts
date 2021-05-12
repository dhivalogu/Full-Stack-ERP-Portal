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
 }, 4000);
    if (localStorage.getItem("cid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('cid')!;
    this.url1=('http://localhost:3200/inquiry?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      this.dataSource = this.rdata[0];
      this.display=!this.display;
      if(this.rdata[0]==null)
      {
        this.display=!this.display;
        this.info = 'No Inquiry Details Found For This Customer ID!';
      }
    });   
  }

}
