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
    let s= document.createElement('script');
    s.setAttribute('src','https://cdn.cai.tools.sap/webchat/webchat.js');
    s.setAttribute('channelId','388c351e-0243-41bd-97ab-a7e74a8c7a8c');
    s.setAttribute('token','327318039f62336f729cd7cda6b2bec6');
    s.setAttribute('id','cai-webchat');
    document.body.appendChild(s);

  }
  
  logout():void
  {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
