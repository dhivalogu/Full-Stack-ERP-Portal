import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-vendor-goods-receipt',
  templateUrl: './vendor-goods-receipt.component.html',
  styleUrls: ['./vendor-goods-receipt.component.css']
})
export class VendorGoodsReceiptComponent implements OnInit {
  displayedColumns: string[] = ['MAT_DOC', 'DOC_YEAR','MATERIAL','ENTRY_QNT','PO_NUMBER','PO_ITEM','AMOUNT_LC','CURRENCY'];
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
      this.info = 'No Quotation Details Found For This Customer ID!';
 }, 4000);
    if (localStorage.getItem("id") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('id')!;
    this.url1=('http://localhost:3200/vendor/goods?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      this.dataSource=this.rdata[0];
      /*for(var i=0;i<this.rdata[0].length;i++)
      {
      this.rdata[0][i].DOC_NUMBER=this.rdata[0][i].DOC_NUMBER[0];
      this.rdata[0][i].ITM_NUMBER=this.rdata[0][i].ITM_NUMBER[0];
      this.rdata[0][i].MATERIAL=this.rdata[0][i].MATERIAL[0];
      this.rdata[0][i].PO_NUMBER=this.rdata[0][i].PO_NUMBER[0];
      this.rdata[0][i].CREAT_DATE=this.rdata[0][i].CREAT_DATE[0];
      this.rdata[0][i].REQ_QTY=this.rdata[0][i].REQ_QTY[0];
      this.rdata[0][i].CURRENCY=this.rdata[0][i].CURRENCY[0];
      this.rdata[0][i].CURRENCY=this.rdata[0][i].CURRENCY[0];
     }
      this.dataSource = this.rdata[0];*/
      this.display=!this.display;
      if(this.rdata[0]==null)
      {
        this.display=!this.display;
        this.info = 'No Quotation Details Found For This Customer ID!';
      }
    });   
  }

}
