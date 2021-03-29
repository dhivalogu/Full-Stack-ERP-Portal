import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-customer-aging',
  templateUrl: './customer-aging.component.html',
  styleUrls: ['./customer-aging.component.css']
})
export class CustomerAgingComponent implements OnInit {
  displayedColumns: string[] = ['COMP_CODE', 'FISC_YEAR','DOC_NO','PSTNG_DATE','BLINE_DATE','CURRENCY','AMOUNT'];
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
      this.info = 'No sales Order Details Found For This Customer ID!';
 }, 3000);
    if (localStorage.getItem("id") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('id')!;
    this.url1=('http://localhost:3200/aging?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      for(var i=0;i<this.rdata[0].length;i++)
      {
      this.rdata[0][i].COMP_CODE=this.rdata[0][i].COMP_CODE[0];
      this.rdata[0][i].FISC_YEAR=this.rdata[0][i].FISC_YEAR[0];
      this.rdata[0][i].DOC_NO=this.rdata[0][i].DOC_NO[0];
      this.rdata[0][i].BLINE_DATE=this.rdata[0][i].BLINE_DATE[0];
      this.rdata[0][i].PSTNG_DATE=this.rdata[0][i].PSTNG_DATE[0];
      this.rdata[0][i].CURRENCY=this.rdata[0][i].CURRENCY[0];
      this.rdata[0][i].AMOUNT=this.rdata[0][i].AMOUNT[0];
     }
      this.dataSource = this.rdata[0];
      this.display=!this.display
    });   
  }
}
