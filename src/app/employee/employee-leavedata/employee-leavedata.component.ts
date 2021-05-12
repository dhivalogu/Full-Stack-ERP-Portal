import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-employee-leavedata',
  templateUrl: './employee-leavedata.component.html',
  styleUrls: ['./employee-leavedata.component.css']
})
export class EmployeeLeavedataComponent implements OnInit {
 
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {


    
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    this.router.navigate(['employee/leave/data']);

}
go():void
{
  console.log("hi");
  this.router.navigate(['employee/applyleave']);
}
}
