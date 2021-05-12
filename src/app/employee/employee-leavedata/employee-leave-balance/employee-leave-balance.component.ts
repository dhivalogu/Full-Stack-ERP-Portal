import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-employee-leave-balance',
  templateUrl: './employee-leave-balance.component.html',
  styleUrls: ['./employee-leave-balance.component.css']
})
export class EmployeeLeaveBalanceComponent implements OnInit {

  displayedColumns: string[] = ['QUOTATYPE', 'QUOTABEG','QUOTAEND','QUOTATEXT','ENTITLE','DEDUCT','ORDERED','QUOTANUM','TIME_UNIT','TIUNITEXT'];
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
      this.info = 'No Leave Balance Data Found For This Customer ID!';
 }, 4000);
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('eid')!;
    this.url1=('http://localhost:3200/employee/leavebal?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      this.dataSource=this.rdata[0];
      
      this.display=!this.display;
      if(this.rdata[0]==null)
      {
        this.display=!this.display;
        this.info = 'No Leave Balance Data Found For This Customer ID!';
      }
    });   
  }
}
