import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import data from '../db.json';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {writeFile, readFile} from '../test';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ourForm: FormGroup;
  // private submissionForm: AngularFirestoreCollection<any>;
  submitting = false;
  submitted = false;
  constructor(private fb: FormBuilder,private router:Router, public http: HttpClient) { }

  ngOnInit(): void {
    // console.log(readFile());
    // this.submissionForm = this.firestore.collection('submissions');
    this.ourForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,Validators.pattern('^([+]\\d{2})?\\d{10}$')]],
      comment: ['', Validators.required],
      durationindays: ['', Validators.required],
      companion: ['', Validators.required],
      gendertitle: ['', Validators.required],
      destinationtitle: ['', Validators.required],
      country: ['', Validators.required],
      accommodation: ['', Validators.required],
    });
  }

  async submitData(value: any) {
    console.log(this.ourForm,value);
    console.log(data);
    var httpOptions = {
      headers: new HttpHeaders({
          'Accept':'application/json',
          'Content-Type': 'application/json'
      })
  };
    this.http.post<any>('https://project-data-ybsg.onrender.com/employees',value,httpOptions).subscribe(res => {
      console.log('---', res)
    });
    // data.push(value);
    this.submitting = true;
    // this.submissionForm.add(value).then(res => {
    //   this.submitted = true;
    // }).catch(err => console.log(err)
    // ).finally(() => {
    //   this.submitting = false;
    // });
    setTimeout(() => {
      alert("Form Submitted Successfully")
      this.ourForm?.reset()
    },200)
    // alert("Form Submitted Successfully")
    // this.ourForm.reset()
    
  }
}
