import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-employee-payslip',
  templateUrl: './employee-payslip.component.html',
  styleUrls: ['./employee-payslip.component.css']
})
export class EmployeePayslipComponent implements OnInit {
  
  logo:string='assets/images/logo.jpg';
  user_id:string='';
  url1:string='';
  info:string='';
  auth1:string='';
  html:string='';
  rdata:any=[];
  display:boolean=true;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.info = 'No Payslip Found For This Employee!';
 }, 4000);
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('eid')!;
    this.url1=('http://localhost:3200/employee/payslip?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      for(var i=1;i<this.rdata[0].length;i++)
      {
      this.html=this.html+this.rdata[0][i].LINE[0];
     }
     console.log(this.html);
    this.display=!this.display;
    });   
  }
  printPage() {
    window.print();
  }

}
