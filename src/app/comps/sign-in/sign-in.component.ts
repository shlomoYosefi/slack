import { Component, OnInit } from '@angular/core';
import {  Validators,  FormBuilder } from '@angular/forms';
import { CanActivService } from 'src/app/can-activ.service';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {

  

  

  constructor(private fb:FormBuilder,private srvData:GetDataService, private srvCanActivate:CanActivService) { }


  signInFromG = this.fb.group({
    myEmail :['',[Validators.required,Validators.email]],
    myPassword : ['',[Validators.required,Validators.min(9)]],
    remmberMe:['']
  })

  ngOnInit(): void {
  }


  onSubmitForm(rememberMe){
    
    
    let user = []
    user.push(this.signInFromG.controls.myEmail.value,this.signInFromG.controls.myPassword.value,rememberMe)
    this.srvData.usersFromLog.push(user)
    console.log(this.srvData.users);
  }


  guard(){
    if(this.signInFromG.valid){
      console.log("go to can activ");
      this.srvCanActivate.logIn = true
    }
    else{
      console.log('kafatz');
      alert("פרטים לא שלמים")
    }

    
  }

  }
