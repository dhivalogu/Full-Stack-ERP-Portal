import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {
  logo:string='assets/images/logo.jpg';
  profile:string='assets/images/profile.png';
  leave:string='assets/images/inquiry.png';
  payslip:string='assets/images/payslip.png';
  fnf:string='assets/images/delivery.png';
  user_id:string;
  display:boolean=true;
  url1:string;
  auth1:string='';
  rdata:any=[];
  rdata1:any=[];
  rdata2:any=[];
  rdata3:any=[];
  info:string;
  info1:string;
  display1:boolean=true;
  date:string;
  info2:string;
  display2:boolean=true;
  info3:string;
  display3:boolean=true;
  info4:string;
  info5:string;
  info6:string;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("vid") === null) {
      this.router.navigate(['']);
    }
    setTimeout(()=>{ 
    this.user_id= localStorage.getItem('vid')!;
    this.url1=('http://localhost:3200/vendor/rfq?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      this.info1=this.rdata[0].length;
      this.display=!this.display;
      this.info2="Requests"
    });
  }, 400);
    setTimeout(()=>{ 
      this.url1=('http://localhost:3200/vendor/po?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      this.rdata1.push(auth);
      console.log(this.rdata1[0]);
      this.info3=this.rdata1[0].length;
      this.info4="Purchase Orders";
      this.display3=!this.display3;
    });
  }, 400);
    setTimeout(()=>{  
      this.url1=('http://localhost:3200/vendor/details');
    this.http.post(this.url1,{user_id:this.user_id}).subscribe((auth) =>
    {

      this.rdata3.push(auth);
      console.log(this.rdata);
      console.log(this.rdata3[0]);
      var fname=this.rdata3[0].NAME[0]+' '+this.rdata3[0].NAME_2[0];
      this.info=fname;;
      this.display2=!this.display2;
    });

    
      
 }, 400);
 setTimeout(()=>{  
  this.url1=('http://localhost:3200/vendor/goods?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
  
  this.rdata2.push(auth);
  this.info5=this.rdata2[0].length;
  this.display1=!this.display1;
  this.info6="Receipts";
});


  
}, 400);


setTimeout(()=>{         
  console.log("Hi")           ;
  console.log(this.display);       
  if(this.display==true) 
    {this.info2="No RFQ's Found";this.display=!this.display}
  if(this.display3==true) {this.info4="No Purchase Order Found";this.display3=!this.display3}
  if(this.display1==true) {this.info6="No Goods Receipt Found";this.display1=!this.display1}
}, 5000);
    
  }
}

