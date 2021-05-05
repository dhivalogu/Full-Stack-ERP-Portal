import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-vendor-credit',
  templateUrl: './vendor-credit.component.html',
  styleUrls: ['./vendor-credit.component.css']
})
export class VendorCreditComponent implements OnInit {
  displayedColumns: string[] = ['GJAHR','BUKRS', 'BELNR','ZFBDT','PSWBT','PSWSL'];
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
      this.info = 'No Credit Memo Found For This Customer ID!';
 }, 4000);
    if (localStorage.getItem("id") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('id')!;
    this.url1=('http://localhost:3200/vendor/credit?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      this.rdata.push(auth);
      console.log(this.rdata);
      for(var i=0;i<this.rdata[0].length;i++)
      {
      this.rdata[0][i].GJAHR=this.rdata[0][i].GJAHR[0];
      this.rdata[0][i].BELNR=this.rdata[0][i].BELNR[0];
      this.rdata[0][i].BUKRS=this.rdata[0][i].BUKRS[0];
      this.rdata[0][i].PSWSL=this.rdata[0][i].PSWSL[0];
      this.rdata[0][i].PSWBT=this.rdata[0][i].PSWBT[0];
      this.rdata[0][i].ZFBDT=this.rdata[0][i].ZFBDT[0];
     }
      this.dataSource = this.rdata[0];
      this.display=!this.display
    });   
  }

}
