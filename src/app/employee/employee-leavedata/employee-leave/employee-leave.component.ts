import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.css']
})
export class EmployeeLeaveComponent implements OnInit {
  displayedColumns: string[] = ['VALIDBEGIN', 'VALIDEND','NAMEOFABSENCETYPE','ABSENCEDAYS'];
  user_id:string='';
  url1:string='';
  info:string='';
  auth1:string='';
  rdata:any=[];
  dataSource:any=[];
  display:boolean=true;
  constructor(private router:Router,private http:HttpClient) { }
  @ViewChild(MatSortModule) sort: MatSortModule;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.info = 'No Leave Details Found For This Customer ID!';
 }, 4000);
    if (localStorage.getItem("eid") === null) {
      this.router.navigate(['']);
    }
    this.user_id= localStorage.getItem('eid')!;
    this.url1=('http://localhost:3200/employee/leavedata?user_id='+this.user_id);
    this.http.get(this.url1).subscribe((auth) =>
    {
      console.log(auth);
      this.rdata.push(auth);
      console.log(this.rdata[0]);
      this.dataSource=this.rdata[0];
      this.display=!this.display;
      if(this.rdata[0]==null)
      {
        this.display=!this.display;
        this.info = 'No Leave Data Found For This Customer ID!';
      }
    });   
  }
  go():void
  {
    console.log("hi");
    this.router.navigate(['employee/applyleave']);
  }
}
