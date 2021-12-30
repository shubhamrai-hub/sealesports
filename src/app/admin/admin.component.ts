import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { RegistrationModel } from '../dialog/dialog.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  teamDetail : any;
  myForm!: any;
  showAdd: boolean;
  showUpdate: boolean;

  constructor(private api: ApiService, private router: Router, private route : ActivatedRoute ,public dialog: MatDialog, private _http: HttpClient) { }

  registrationModelObj : RegistrationModel = new RegistrationModel();

  ngOnInit(): void {
    this.myForm = new FormGroup({
      teamName: new FormControl('',[Validators.required]),
      leaderIGN: new FormControl('',[Validators.required]),
      leaderId: new FormControl('',[Validators.required]),
      whatappNo: new FormControl('',[Validators.required]),
      Player02IGN: new FormControl('',[Validators.required]),
      Player02Id: new FormControl('',[Validators.required]),
      Player03IGN: new FormControl('',[Validators.required]),
      Player03Id: new FormControl('',[Validators.required]),
      Player04IGN: new FormControl('',[Validators.required]),
      Player04Id: new FormControl('',[Validators.required]),
    });
    this.teamDetails();

    // this.route.paramMap.subscribe(parameterMap =>{
    //   const id = +parameterMap.get('id');
    //   this.editTeamdetail(id);
    // });
  }

  // private editTeamdetail(id : number){      
  //   if(id === 0){
  //     this.teamDetail = {
  //       teamName: '', 
  //       leaderIGN:  '', 
  //       leaderId: '',
  //       whatappNo:  '',
  //       Player02IGN:  '',
  //       Player02Id:   '',
  //       Player03IGN:  '',
  //       Player03Id:   '',
  //       Player04IGN:  '',
  //       Player04Id:   '',
  //       ExtraPlayer01IGN: '',   
  //       ExtraPlayer01Id:  '',
  //       ExtraPlayer02IGN: '',
  //       ExtraPlayer02Id:  ''
  //     };
  //   } else {
  //     this.api.editTeamDetail(id);
  //   }
  // }


  teamDetails(){
    this.api.getTeamDetail()
    .subscribe(res => {
      this.teamDetail = res;
    })
  }

 

 deleteTeamDetails(row){
   this.api.deleteTeamDetail(row.id)
   .subscribe(res =>{
     alert("Team Deleted")
     this.teamDetails();
   })
 
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog result: ${res}`);
    })
  }
  onEdit( row:any ){

    this.showAdd = false;

    this.showUpdate = true;

    this.registrationModelObj.id = row.id;

    this.myForm.controls['firstName'].setValue(row.firstName);

    this.myForm.controls['lastName'].setValue(row.lastName);

    this.myForm.controls['email'].setValue(row.email);

    this.myForm.controls['mobile'].setValue(row.mobile);

    this.myForm.controls['salary'].setValue(row.salary);

  }

}
