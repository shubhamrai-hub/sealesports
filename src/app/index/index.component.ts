
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { ApiService } from '../api.service/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { IndexModel } from './index.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  signupForm!: FormGroup;
  loginForm!: FormGroup;
  adminForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern]]
    })

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern]]
    })

    this.adminForm = this.formBuilder.group({
      username: ['', Validators.required],
      pass: ['', [Validators.required, Validators.pattern]]
    })

  }

  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  get username(){return this.loginForm.get('username')}
  get pass(){return this.loginForm.get('pass')}

  logIn() {
    this._http.get<any>("http://localhost:3000/posts").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        alert("Login Successfully");
        this.loginForm.reset();
      } else {
        alert("User Not Found !!")
      }
    }, err => {
      alert("Something Went Wrong...")
    })
  }

  signUp() {
    this._http.post<any>("http://localhost:3000/posts", this.signupForm.value).subscribe(res => {
      alert("Sign-Up Successfully");
      this.signupForm.reset();
    }, err => {
      alert("Something Went Wrong")
    })
  }

  adminLogin() {
    this._http.get<any>("http://localhost:3000/admin").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.adminForm.value.username && a.pass === this.adminForm.value.pass
      })
      if (user) {
        alert("Login Successfully");
        this.adminForm.reset();
      } else {
        alert("User Not Found !!")
      }
    }, err => {
      alert("Something Went Wrong...")
    })
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog result: ${res}`);
    })
  }

  openAdmin(){
    let dialogRef = this.dialog.open(AdminComponent);

    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog result: ${res}`);
    })
  }

}
