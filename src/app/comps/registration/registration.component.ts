import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  registrationFromG = this.fb.group({
    firstName :['',[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
    lastName : ['',[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.min(9)]],
    confirmPassword:['',[Validators.min(9)]]})
  

  ngOnInit(): void {
  }

  

}
