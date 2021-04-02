import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-customer-upload',
  templateUrl: './customer-upload.component.html',
  styleUrls: ['./customer-upload.component.css']
})
export class CustomerUploadComponent implements OnInit {
  uploadedFiles: Array < File > ;
  file:File;
  constructor(private http:HttpClient) {
    
   }
  ngOnInit(): void {
    
  }
  fileChange(element:any) {
    this.uploadedFiles = element.target.files;
}

upload() {
  /*let formData = new FormData();
  for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  }*/
  this.http.post('http://localhost:3000/upload',this.file)
      .subscribe((response) => {
          console.log('response received is ', response);
      })
}
  }

