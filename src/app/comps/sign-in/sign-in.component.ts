import { Component, OnInit } from '@angular/core';
import {  Validators,  FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CanActivService } from 'src/app/can-activ.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {

  

  

  constructor(private fb:FormBuilder,private srv:DataService,private srvCanActivate:CanActivService) { }


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
    this.srv.users.push(user)
    console.log(this.srv.users);
  }


  log(){
    if(this.signInFromG.valid){
      console.log("go to can activ");
      
      this.srvCanActivate.logIn = true
    }
    console.log('kafatz');
    
  }

  }
