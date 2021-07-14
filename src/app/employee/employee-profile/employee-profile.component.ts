import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule,FormControl} from '@angular/forms';
import { NgModule } from '@angular/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as _moment from 'moment';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class EmployeeProfileComponent implements OnInit {
  logo:string='assets/images/profile1.png';
  user_id:string='';
  password:string='';
  url1:string='';
  info:string='';
  auth1:string='';
  rdata:any=[];
  fname:string='';
  lname:string='';
  country:string='';
  city:string='';
  postal:string='';
  dob:string='';
  street:string='';
  address:string='';
  mobile:string='';
  editable:boolean=false;
  display:boolean=true;
  date1=new Date();
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    
    this.user_id= localStorage.getItem('eid')!;
    this.url1=('http://localhost:3200/employee/details');
    this.http.post(this.url1,{user_id:this.user_id}).subscribe((auth) =>
    {
      //console.log(auth);
      this.rdata.push(auth);
      //console.log(this.rdata);
      console.log(this.rdata[0]);
      this.fname=this.rdata[0].ENAME[0];
      var fullname = this.fname.split(/(\s+)/);
      this.lname=fullname[2];
      this.fname=fullname[0];
      this.country=this.rdata[0].LAND[0];
      this.city=this.rdata[0].ORT01[0];
      this.postal=this.rdata[0].PSTLZ[0];
    
    
      this.dob=this.rdata[0].GBDAT[0];
      this.date1=new Date(this.dob);
      this.street=this.rdata[0].STRAS[0];
      this.mobile=this.rdata[0].TELNR[0];
      this.display=!this.display;
      this.info='';
      //console.log(this.auth1);
    });
    
  }
  edit():void{
    this.editable=true;
    this.info="";
    console.log(this.date1);
    
    
  }
  update():void{

    console.log(this.country);
    var d = new Date(this.date1),
        month1 = d.getMonth()+1,
        month=''+month1,
        day = ''+d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var fin_date=[year, month, day].join('-');
    this.url1=('http://localhost:3200/employee/update?user_id='+this.user_id+'&fname='+this.fname+'&lname='+this.lname+'&country='+this.country+'&city='+this.city+'&postal='+this.postal+'&dob='+fin_date+'&street='+this.street+'&mobile='+this.mobile);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
    });
    this.info="Updated Successfully";
    this.editable=false;
    setTimeout(()=>{                           
      this.info = '';
 }, 2000);
  }
}
