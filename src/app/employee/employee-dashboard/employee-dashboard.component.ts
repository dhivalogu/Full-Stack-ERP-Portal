import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  logo:string='assets/images/logo.jpg';
  profile:string='assets/images/profile.png';
  leave:string='assets/images/leave.png';
  payslip:string='assets/images/payslip.png';
  fnf:string='assets/images/fnf.jpg';
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
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    setTimeout(()=>{ 
    this.user_id= localStorage.getItem('eid')!;
    this.url1=('http://localhost:3200/employee/leavedata?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      this.info=this.rdata[0].length;
      this.display=!this.display;
    });
  }, 400);
    setTimeout(()=>{ 
    this.url1=('http://localhost:3200/employee/cn');
    this.http.post(this.url1,{user_id:this.user_id}).subscribe((auth)  =>
    {
      this.rdata1.push(auth);
      console.log(this.rdata1[0]);
      if(this.rdata1[0].FLAG=='1')
      {    
        this.date=this.rdata1[0].P_EDATE[0];
        this.url1=('http://localhost:3200/employee/fnf');
         this.http.post(this.url1,{user_id:this.user_id,date:this.date}).subscribe((auth) =>
        {
          this.rdata2.push(auth);
          this.info1=this.rdata2[0].LV_NETPAY[0];
          this.info2="Total Settlement"
        });
        
      }
      else{
        
        this.info2="You Have Not Applied For Notice Period"
      }
      this.display1=!this.display1;
    });
  }, 400);
    setTimeout(()=>{  
    this.url1=('http://localhost:3200/employee/details');
    this.http.post(this.url1,{user_id:this.user_id}).subscribe((auth) =>
    {

      this.rdata3.push(auth);
      console.log(this.rdata);
      console.log(this.rdata3[0]);
      var fname=this.rdata3[0].ENAME[0];
      this.info3=fname;;
      this.display2=!this.display2;
    });

    
      
 }, 400);

    
    
  }
}
