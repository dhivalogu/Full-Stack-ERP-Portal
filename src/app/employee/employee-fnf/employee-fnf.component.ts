import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-employee-fnf',
  templateUrl: './employee-fnf.component.html',
  styleUrls: ['./employee-fnf.component.css']
})
export class EmployeeFnfComponent implements OnInit {
logo:string='assets/images/logo.jpg';
hi:ImageData;
  user_id:string='';
  password:string='';
  url1:string='';
  info:string='Employee has applied for notice period,Fnf is getting generated';
  auth1:string='';
  rdata:any=[];
  fname:string='';
  lname:string='';
  org:string='';
  ccenter:string='';
  join:string='';
  tenure:string='';
  netpay:string='';
  deduction:any='';
  final_amount:string='';
  end:string = '';
  editable:boolean=false;
  display:boolean=true;
  date:string;
  
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('eid')!;
    this.url1=('http://localhost:3200/employee/cn');
    this.http.post(this.url1,{user_id:this.user_id}).subscribe((auth)  =>
    {
      console.log(auth);
      this.rdata.push(auth);
      console.log(this.rdata[0].FLAG);
      this.date=this.rdata[0].P_EDATE[0];
      console.log(this.date);
    });
    this.url1=('http://localhost:3200/employee/details');
    this.http.post(this.url1,{user_id:this.user_id}).subscribe((auth) =>
    {
      //console.log(auth);
      //console.log(this.rdata);
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      this.fname=this.rdata[1].ENAME[0];
      this.lname=this.rdata[1].NACHN[0];

      //console.log(this.auth1);
    });
    setTimeout(()=>{                           
      this.url1=('http://localhost:3200/employee/fnf');
    console.log('hi');
    this.http.post(this.url1,{user_id:this.user_id,date:this.date}).subscribe((auth) =>
    {
      this.rdata.push(auth);
      //console.log(this.rdata);
      console.log(this.rdata[1]);
      this.org=this.rdata[2].LV_CCLTEXT[0];
      this.ccenter=this.rdata[2].LV_COSTCENTER[0];
      this.join=this.rdata[2].LV_JOIN[0];
      this.netpay=this.rdata[2].LV_NETPAY[0];
      this.deduction= +this.rdata[2].LV_BET01[0];
      this.deduction= this.deduction +  +this.rdata[2].LV_BET02[0];
      this.deduction=this.deduction +  +this.rdata[2].LV_BET03[0]
      this.final_amount=this.rdata[2].LV_EOSAMOUNT[0];
      this.tenure=this.rdata[2].LV_TENUREDATE[0];
      this.end=this.date;
      this.display=!this.display;
      console.log(this.end);
      //console.log(this.auth1);
    });
 }, 4000);
    
    
  }
  edit():void{
    this.editable=true;
    this.info="";
    html2canvas(document.querySelector("#divName")! as HTMLElement).then(canvas => {
      document.body.appendChild(canvas)
  });
  }
  
}
