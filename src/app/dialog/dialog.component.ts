import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service/api.service';
import { RegistrationModel } from './dialog.model'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  myForm!: FormGroup;

  registrationModelObj: RegistrationModel = new RegistrationModel();

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private route : ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      leaderIGN: ['', Validators.required],
      leaderId: ['', Validators.required],
      whatappNo: ['', Validators.required],
      Player02IGN: ['', Validators.required],
      Player02Id: ['', Validators.required],
      Player03IGN: ['', Validators.required],
      Player03Id: ['', Validators.required],
      Player04IGN: ['', Validators.required],
      Player04Id: ['', Validators.required]
    });

    console.log(this.route.snapshot.params.id)
    this.api.editTeamDetail(this.route.snapshot.params.id).subscribe((res)=>{
      this.myForm = new FormGroup({
        teamName: new FormControl(res['teamName']),
        leaderIGN: new FormControl(res['leaderIGN']),
        leaderId: new FormControl(res['leaderId']),
        whatappNo: new FormControl(res['whatappNo']),
        Player02IGN: new FormControl(res['Player02IGN']),
        Player02Id: new FormControl(res['Player02Id']),
        Player03IGN: new FormControl(res['Player03IGN']),
        Player03Id: new FormControl(res['Player03Id']),
        Player04IGN: new FormControl(res['Player04IGN']),
        Player04Id: new FormControl(res['Player04Id']),
      });
    })

  }

  

  numberOnly(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
    }
    return true;
    }
  
  teamDetails(){
    this._http.post<any>("http://localhost:3000/registration", this.myForm.value).subscribe(res => {
      alert("Team Registered Successfully!!");
      this.myForm.reset();
    }, err => {
      alert("Something Went Wrong")
    })
  }

}
