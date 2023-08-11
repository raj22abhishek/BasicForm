import { Component } from '@angular/core';
// import studentsData from './data.json';  
import studentsData from '../db.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
interface Student {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
}  
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  name = 'Angular';  
  students: any[];
  constructor(public http: HttpClient) {
    var httpOptions = {
      headers: new HttpHeaders({
          'Accept':'application/json',
          'Content-Type': 'application/json'
      })
  };
    this.http.get<any>('http://localhost:3000/employees',httpOptions).subscribe(res => {
      this.students  = res;
      console.log('---', res)
      
    });
  }
  // students: any[] = this.finalRes;  
}
