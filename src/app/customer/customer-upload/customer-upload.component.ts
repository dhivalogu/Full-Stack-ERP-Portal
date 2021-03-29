import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-customer-upload',
  templateUrl: './customer-upload.component.html',
  styleUrls: ['./customer-upload.component.css']
})
export class CustomerUploadComponent implements OnInit {
  file?:File
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
  upload()
  {
    console.log("hi");
    this.http.get('http://localhost:3000/upload?file='+this.file).subscribe((response) => {
      console.log('response received is ', response);
 });
  }
}
