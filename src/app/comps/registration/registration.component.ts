import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CanActivService } from 'src/app/can-activ.service';
import { Store } from '@ngrx/store';
import { addPerson } from 'src/app/services/stor/events';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder ,private srvCanActivate:CanActivService , private stor:Store<any>) { }


  registrationFromG = this.fb.group({
    firstName :['',Validators.minLength(4)],
    lastName : ['',],
    email:['',],
    password:['',],
    confirmPassword:['',]})
  

  ngOnInit(): void {
  }


  guard(firstName,lastName,email,password,ConfirmPassword){

    if(password !== ConfirmPassword){
      alert("אימות סיסמא שגוי")
      return
    }

    let id = Math.floor(Math.random() * 10000);
    let person ={
      id,
      firstName,
      lastName,
      email,
      password
    }
    console.log(person);
    
console.log(this.registrationFromG.controls.firstName.errors);

    this.stor.dispatch(addPerson(person));

    
    
    if(this.registrationFromG.valid){
      console.log("go to can activ");
      this.srvCanActivate.logIn = true
      
    }
    else{
      console.log('kafatz');
      alert("פרטים לא שלמים")
    }
    
  
  }
}