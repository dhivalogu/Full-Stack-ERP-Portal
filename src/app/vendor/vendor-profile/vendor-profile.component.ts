import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {
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
  region:string='';
  street:string='';
  address:string='';
  mobile:string='';
  editable:boolean=false;
  
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem("vid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('vid')!;
    this.url1=('http://localhost:3200/vendor/details');
    this.http.post(this.url1,{user_id:this.user_id}).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      console.log(this.rdata);
      this.fname=this.rdata[0].NAME[0];
      this.lname=this.rdata[0].NAME_2[0];
      this.country=this.rdata[0].COUNTRY[0];
      this.city=this.rdata[0].CITY[0];
      this.postal=this.rdata[0].POSTL_CODE[0];
      this.region=this.rdata[0].REGION[0];
      this.street=this.rdata[0].STREET[0];
      this.mobile=this.rdata[0].TELEPHONE[0];
      this.address=this.rdata[0].ADRNR[0];

      console.log(this.auth1);
    });
    
  }
  edit():void{
    this.editable=true;
    this.info="";
  }
  update():void{
    
    this.url1=('http://localhost:3200/update?user_id='+this.user_id+'&fname='+this.fname+'&lname='+this.lname+'&country='+this.country+'&city='+this.city+'&postal='+this.postal+'&region='+this.region+'&street='+this.street+'&mobile='+this.mobile+'&address='+this.address);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
    });
    this.info="Updated Successfully";
    this.editable=false;
  }

}
