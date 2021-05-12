import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee-leavecreate',
  templateUrl: './employee-leavecreate.component.html',
  styleUrls: ['./employee-leavecreate.component.css']
})
export class EmployeeLeavecreateComponent implements OnInit {
  logo:string='assets/images/logo.jpg';
  user_id:string='';
  START_DATE:string='';
  LAST_DATE:string='';
  LEAVE_TYPE:string='';
  HOURS:string='';
  url1:string='';
  info:string='';
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("eid") !== null) {
      this.router.navigate(['home']);
    }
    this.user_id= localStorage.getItem('eid')!;

  }
  update():void{

    
    this.url1=('http://localhost:3200/employee/applyleave?user_id='+this.user_id+'&START_DATE='+this.START_DATE+'&LAST_DATE='+this.LAST_DATE+'&LEAVE_TYPE='+this.LEAVE_TYPE+'&HOURS='+this.HOURS);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
    });
    this.info="Applied Successfully";
  }

}
