import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
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
  selector: 'app-employee-notice',
  templateUrl: './employee-notice.component.html',
  styleUrls: ['./employee-notice.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class EmployeeNoticeComponent implements OnInit {
  
  date1=new Date();
  user_id:string;
  url1:string;
  auth1:string='';
  rdata:any=[];
  info1:string="Notice Period : 1 Month";
  info:string="";
  display:boolean=true;
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
      if(this.rdata[0].FLAG=='1')
      {    
        
        this.router.navigate(['employee/FnF']);
        
      }
      this.display=!this.display;
    }); 
    
  }
  apply():void{
    
    var d = new Date(this.date1),
        month = '' + (d.getMonth() + 2),
        day = '' + ((d.getDate()+28)%30),
        year = d.getFullYear();
        var fin_mon=d.getMonth();
        d.setMonth((fin_mon+1)%12);

       var m=parseInt(month);
       month=''+(d.getMonth()+1)%12;
       console.log(month);
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    
    if(parseInt(month)<fin_mon)
        year=year+1;
    
    this.info1="Notice Period Ends On : "+ [year, month, day].join('-');
   
    
  }
  
  update():void{
    
    var d = new Date(this.date1),
        month = '' + (d.getMonth() + 2),
        day = '' + ((d.getDate()+28)%30),
        year = d.getFullYear();
        var fin_mon=d.getMonth();
        d.setMonth((fin_mon+1)%12);

       var m=parseInt(month);
       month=''+(d.getMonth()+1)%12;
       console.log(month);
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    
    if(parseInt(month)<fin_mon)
        year=year+1;
    
    this.info1="Notice Period Ends On : "+ [year, month, day].join('-');
    var fin_date=[year, month, day].join('-');
    this.url1=('http://localhost:3200/employee/notice');
    this.http.post(this.url1,{user_id:this.user_id,date:fin_date}).subscribe((auth)  =>
    {
      console.log(auth);

      this.router.navigate(['employee/FnF']);
    }); 
    console.log(this.date1);
  }

}
