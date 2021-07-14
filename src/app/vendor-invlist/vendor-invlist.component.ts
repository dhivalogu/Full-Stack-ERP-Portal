import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-vendor-invlist',
  templateUrl: './vendor-invlist.component.html',
  styleUrls: ['./vendor-invlist.component.css']
})
export class VendorInvlistComponent implements OnInit {
  displayedColumns: string[] = ['INV_DOC_NO','FISC_YEAR', 'DOC_DATE','GROSS_AMNT','CURRENCY','actions'];
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
    if (localStorage.getItem("vid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('vid')!;
    this.url1=('http://localhost:3200/vendor/invoicelist?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      this.rdata.push(auth);
      console.log(this.rdata);
      this.dataSource = this.rdata[0];
      this.display=!this.display
    });   
  }
  logIndex(i)
  {
    localStorage.setItem("invno", this.rdata[0][i].INV_DOC_NO[0]);
    localStorage.setItem("fisc", this.rdata[0][i].FISC_YEAR[0]);
    this.router.navigate(['vendor/finance/invoice']);
  }

}
