import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-customer-delivery',
  templateUrl: './customer-delivery.component.html',
  styleUrls: ['./customer-delivery.component.css']
})
export class CustomerDeliveryComponent implements OnInit {
  displayedColumns: string[] = ['VBELN','ERDAT', 'ERZET','LFART','VKORG','INCO2','ARKTX','LFDAT_V','LFUHR'];
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
      this.info = 'No Delivery Details Found For This Customer ID!';
 }, 4000);
    if (localStorage.getItem("id") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('id')!;
    this.url1=('http://localhost:3200/delivery?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      this.rdata.push(auth);
      for(var i=0;i<this.rdata[0].length;i++)
      {
      this.rdata[0][i].VBELN=this.rdata[0][i].VBELN[0];
      this.rdata[0][i].ERZET=this.rdata[0][i].ERZET[0];
      this.rdata[0][i].ERDAT=this.rdata[0][i].ERDAT[0];
      this.rdata[0][i].VKORG=this.rdata[0][i].VKORG[0];
      this.rdata[0][i].LFART=this.rdata[0][i].LFART[0];
      this.rdata[0][i].INCO2=this.rdata[0][i].INCO2[0];
      this.rdata[0][i].LFUHR=this.rdata[0][i].LFUHR[0];
      this.rdata[0][i].ARKTX=this.rdata[0][i].ARKTX[0];
      this.rdata[0][i].LFDAT_V=this.rdata[0][i].LFDAT_V[0];
     }
      this.dataSource = this.rdata[0];
      this.display=!this.display
    });   
  }

}
