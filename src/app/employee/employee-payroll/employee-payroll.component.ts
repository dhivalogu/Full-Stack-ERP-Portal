import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-employee-payroll',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.css']
})
export class EmployeePayrollComponent implements OnInit {
  displayedColumns: string[] = ['FPBEGIN', 'FPEND','PAYDATE','actions'];
  
  user_id:string='';
  url1:string='';
  info:string='';
  auth1:string='';
  rdata:any=[];
  dataSource:any=[];
  display:boolean=true;
  length:any;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.info = 'No Leave Balance Data Found For This Customer ID!';
 }, 4000);
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('eid')!;
    this.url1=('http://localhost:3200/employee/payroll?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      this.dataSource=this.rdata[0];
      this.length=(this.rdata[0].length)-1;
      this.display=!this.display;
      if(this.rdata[0]==null)
      {
        this.display=!this.display;
        this.info = 'No Leave Balance Data Found For This Customer ID!';
      }
    });   
  }
  logIndex(i)
  {
    localStorage.setItem("eseq", this.rdata[0][i].SEQUENCENUMBER[0]);
    this.router.navigate(['employee/payslip']);
  }
  recent()
  {
    localStorage.setItem("eseq", this.rdata[0][this.length].SEQUENCENUMBER[0]);
    this.router.navigate(['employee/payslip']);
  }

}
