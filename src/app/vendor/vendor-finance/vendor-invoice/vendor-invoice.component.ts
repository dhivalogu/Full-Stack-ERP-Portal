import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-vendor-invoice',
  templateUrl: './vendor-invoice.component.html',
  styleUrls: ['./vendor-invoice.component.css']
})
export class VendorInvoiceComponent implements OnInit {
  _base64ToArrayBuffer(base64) {
    var binary_string = base64.replace(/\\n/g, '');
    binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
  display:boolean=true;
  user_id:string='';
  url1:string='';
  info:string='';
  auth1:any;
  src:any;
  invno:string;
  fisc_year:string;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.info = 'No Credit Memo Found For This Customer ID!';
 }, 4000);
    if (localStorage.getItem("vid") === null) {
      this.router.navigate(['']);
    }
    this.invno= localStorage.getItem('invno')!;
    this.user_id= localStorage.getItem('vid')!;
    this.fisc_year= localStorage.getItem('fisc')!;
    this.url1=('http://localhost:3200/vendor/invoice');
    this.http.post(this.url1,{invno:this.invno,user_id:this.user_id,fisc_year:this.fisc_year},{responseType: 'text'}).subscribe((auth) =>
    {
      console.log(auth);
      this.auth1=auth;
      this.src = this._base64ToArrayBuffer(auth);
      this.display=!this.display
    });   
  }

  download()
  {
    const linkSource = 'data:application/pdf;base64,' + this.auth1;
    const downloadLink = document.createElement("a");
    const fileName = "Invoice_"+this.invno+".pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  
  
}
