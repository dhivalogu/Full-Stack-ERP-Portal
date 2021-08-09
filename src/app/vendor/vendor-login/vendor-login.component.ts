import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {
  logo:string='assets/images/logo.jpg';
  name:string='hi';
  user_id:string='';
  password:string='';
  url1:string='';
  error:string='';
  auth1:string='';
  login:any=[];
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("vid") !== null) {
      this.router.navigate(['vendor']);
    }
  }
  signin():void
  {
    this.url1=('http://localhost:3200/vendor/login/');
    this.http.post(this.url1,{user_id:this.user_id,password:this.password}).subscribe((auth) =>
    {
      console.log(auth);
      if(auth=='1')
      {
        this.router.navigate(['vendor']);
        localStorage.setItem("vid", this.user_id);
        this.error='User exists'
      }
      else
      {
        this.error='Enter valid username & password'
      }
    });
   
  }


}
