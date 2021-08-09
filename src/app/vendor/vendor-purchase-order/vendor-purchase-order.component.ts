import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-vendor-purchase-order',
  templateUrl: './vendor-purchase-order.component.html',
  styleUrls: ['./vendor-purchase-order.component.css']
})
export class VendorPurchaseOrderComponent implements OnInit {
  displayedColumns: string[] = ['PO_NUMBER', 'CHANGED_ON','SHORT_TEXT','MATERIAL','QUANTITY','NET_VALUE'];
  user_id:string='';
  url1:string='';
  info:string='';
  auth1:string='';
  rdata:any=[];
  dataSource:any=[];
  display:boolean=true;
  paginator: MatPaginator;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    
    if (localStorage.getItem("vid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('vid')!;
    this.url1=('http://localhost:3200/vendor/po?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      this.dataSource=new MatTableDataSource(this.rdata[0]);
      this.dataSource.paginator = this.paginator;
      this.display=!this.display;
      if(this.rdata[0]==null)
      {
        this.display=!this.display;
        this.info = 'No Purchase Found For This Customer ID!';
      }
    });   
  }
  go():void
  {
    this.router.navigate(['vendor/create-po']);
  }

}
