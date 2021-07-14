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
  selector: 'app-employee-leavecreate',
  templateUrl: './employee-leavecreate.component.html',
  styleUrls: ['./employee-leavecreate.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class EmployeeLeavecreateComponent implements OnInit {
  logo:string='assets/images/logo.jpg';
  user_id:string='';
  START_DATE=new Date();
  LAST_DATE=new Date();
  LEAVE_TYPE:string='';
  HOURS:string='';
  url1:string='';
  info:string='';
  rdata:any=[];
  flag:any=0;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('eid')!;
  }
  update():void{
    
    if(this.START_DATE < this.LAST_DATE){
   
    var d = new Date(this.START_DATE),
        month1 = d.getMonth()+1,
        month=''+month1,
        day = ''+d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var start_date=[year, month, day].join('-');

    var d = new Date(this.LAST_DATE),
        month1 = d.getMonth()+1,
        month=''+month1,
        day = ''+d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var last_date=[year, month, day].join('-');
    console.log(start_date);
    console.log(last_date);
    this.url1=('http://localhost:3200/employee/leavedata?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      console.log(this.rdata);
      for(var i=0;i<this.rdata.length;i++)
      {
        if(this.rdata[i]["VALIDBEGIN"][0]==start_date||this.rdata[i]["VALIDEND"][0]==start_date||this.rdata[i]["VALIDBEGIN"][0]==last_date||this.rdata[i]["VALIDEND"][0]==last_date)
        {
          this.flag=1;
        }

      }
    });
    if(this.flag==0)
    {
    this.url1=('http://localhost:3200/employee/applyleave?user_id='+this.user_id+'&START_DATE='+start_date+'&LAST_DATE='+last_date+'&LEAVE_TYPE='+this.LEAVE_TYPE);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      if(auth=='')
        this.info="Applied Successfully";
      else
        this.info="Please enter valid time and type";
    });
    
    }
    else{
    this.info="Please Enter Valid Starting Date and End Date";
   }
  }
}

}
