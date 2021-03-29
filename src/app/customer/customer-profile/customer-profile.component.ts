import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  logo:string='assets/images/logo.jpg';
  user_id:string='';
  password:string='';
  url1:string='';
  info:string='';
  auth1:string='';
  login:any=[];
  fname:string='';
  lname:string='';
  country:string='';
  city:string='';
  postal:string='';
  region:string='';
  street:string='';
  address:string='';
  mobile:string='';
  editable:boolean=false;
  
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("id") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('id')!;
    this.url1=('http://localhost:3200/login?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.login.push(auth);
      console.log(this.login);
      this.fname=this.login[0].NAME1[0];
      this.lname=this.login[0].NAME2[0];
      this.country=this.login[0].LAND1[0];
      this.city=this.login[0].ORT01[0];
      this.postal=this.login[0].PSTLZ[0];
      this.region=this.login[0].REGIO[0];
      this.street=this.login[0].STRAS[0];
      this.mobile=this.login[0].TELF1[0];
      this.address=this.login[0].ADRNR[0];

      console.log(this.auth1);
    });
    
  }
  edit():void{
    this.editable=true;
    this.info="";
  }
  update():void{
    this.editable=false;
    this.info="Updated Successfully";
  }
}
