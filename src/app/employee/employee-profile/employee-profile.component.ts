import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  logo:string='assets/images/logo.jpg';
  user_id:string='';
  password:string='';
  url1:string='';
  info:string='';
  auth1:string='';
  rdata:any=[];
  fname:string='';
  lname:string='';
  country:string='';
  city:string='';
  postal:string='';
  dob:string='';
  street:string='';
  address:string='';
  mobile:string='';
  editable:boolean=false;
  
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('eid')!;
    this.url1=('http://localhost:3200/employee/details');
    this.http.post(this.url1,{user_id:this.user_id}).subscribe((auth) =>
    {
      //console.log(auth);
      this.rdata.push(auth);
      //console.log(this.rdata);
      console.log(this.rdata[0]);
      this.fname=this.rdata[0].VORNA[0];
      this.lname=this.rdata[0].NACHN[0];
      this.country=this.rdata[0].LAND[0];
      this.city=this.rdata[0].ORT01[0];
      this.postal=this.rdata[0].PSTLZ[0];
    
    
      this.dob=this.rdata[0].GBDAT[0];
      this.street=this.rdata[0].STRAS[0];
      this.mobile=this.rdata[0].TELNR[0];

      //console.log(this.auth1);
    });
    
  }
  edit():void{
    this.editable=true;
    this.info="";
  }
  update():void{


    
    this.url1=('http://localhost:3200/employee/update?user_id='+this.user_id+'&fname='+this.fname+'&lname='+this.lname+'&country='+this.country+'&city='+this.city+'&postal='+this.postal+'&dob='+this.dob+'&street='+this.street+'&mobile='+this.mobile);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
    });
    this.info="Updated Successfully";
    this.editable=false;
  }
}
