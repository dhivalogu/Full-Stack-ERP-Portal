import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-customer-sales',
  templateUrl: './customer-sales.component.html',
  styleUrls: ['./customer-sales.component.css']
})
export class CustomerSalesComponent implements OnInit {
  displayedColumns: string[] = ['SD_DOC', 'ITM_NUMBER','MATERIAL','CREATION_DATE','SHORT_TEXT','REQ_QTY','REQ_DATE','DOC_STATUS','CURRENCY','NET_PRICE'];
  user_id:string='';
  url1:string='';
  info:string='';
  auth1:string='';
  login:any=[];
  dataSource:any=[];
  display:boolean=true;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.info = 'No sales Order Details Found For This Customer ID!';
 }, 3000);
    if (localStorage.getItem("id") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('id')!;
    this.url1=('http://localhost:3200/salesorder?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.login.push(auth);
      for(var i=0;i<this.login[0].length;i++)
      {
      this.login[0][i].SD_DOC=this.login[0][i].SD_DOC[0];
      this.login[0][i].ITM_NUMBER=this.login[0][i].ITM_NUMBER[0];
      this.login[0][i].MATERIAL=this.login[0][i].MATERIAL[0];
      this.login[0][i].SHORT_TEXT=this.login[0][i].SHORT_TEXT[0];
      this.login[0][i].CREATION_DATE=this.login[0][i].CREATION_DATE[0];
      this.login[0][i].REQ_QTY=this.login[0][i].REQ_QTY[0];
      this.login[0][i].REQ_DATE=this.login[0][i].REQ_DATE[0];
      this.login[0][i].DOC_STATUS=this.login[0][i].DOC_STATUS[0];
      this.login[0][i].NET_PRICE=this.login[0][i].NET_PRICE[0];
      this.login[0][i].CURRENCY=this.login[0][i].CURRENCY[0];
     }
      this.dataSource = this.login[0];
      this.display=!this.display
    });   
  }

}
