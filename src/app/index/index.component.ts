
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service/api.service';
import { IndexModel } from './index.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  myId!: any;
  myForm!: any;

  registrationModelObj : IndexModel = new IndexModel();

  constructor( private api : ApiService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      mail: new FormControl('',[Validators.required]),
      pass: new FormControl('',[Validators.required])
    });
  }

  postTeamDetails(){
    this.registrationModelObj.name = this.myForm.value.name;
    this.registrationModelObj.dob = this.myForm.value.dob;
    this.registrationModelObj.mail = this.myForm.value.mail;
    this.registrationModelObj.pass = this.myForm.value.pass;
    

    this.api.postEmail(this.registrationModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Team Details Added Successfully....");
      this.router.navigate(['registrationalert'])
    },
    err=>{
      alert("Something Went Wrong")
    })
  }

  onSubmit(){
    let formdata={
      name:this.myForm.controls.name.value,
      dob:this.myForm.controls.dob.value,
      mail:this.myForm.controls.mail.value,
      pass:this.myForm.controls.pass.value
    }
    localStorage.setItem("formdata", JSON.stringify(formdata));
  console.log(this.myForm)
  }

}
