import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  logo:string='assets/images/logo.png';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['employee/profile']);
  }
  
  logout():void
  {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
