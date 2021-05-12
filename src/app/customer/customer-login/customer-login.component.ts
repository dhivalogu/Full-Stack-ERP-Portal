import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
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
    if (localStorage.getItem("cid") !== null) {
      this.router.navigate(['customer']);
    }
  }
  signin():void
  {
    this.url1=('http://localhost:3200/login?user_id='+this.user_id+'&password='+this.password);
    localStorage.setItem("cid", this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.login.push(auth);
      console.log(this.login);
      this.auth1=this.login[0].FLAG;
      console.log(this.auth1);
      if(this.auth1=='2')
      {
        this.router.navigate(['customer']);
      }
      else if(auth=='1')
      {
        this.error='User ID And Password Mismatch';
      }
      else
      {
        this.error='User not exists'
      }
    });
   
  }

}
