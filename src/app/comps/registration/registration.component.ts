import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CanActivService } from 'src/app/can-activ.service';
import { Store } from '@ngrx/store';
import { addPerson } from 'src/app/services/stor/events';
import { AngularFirestore } from '@angular/fire/firestore';
import { GetDataService } from 'src/app/services/get-data.service';
import { ChatComponent } from '../chat/chat.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { SendDataService } from 'src/app/services/send-data.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  log 

  constructor(private fb:FormBuilder ,private srvCanActivate:CanActivService , private stor:Store<any>,private fireStore:AngularFirestore ,private srvData:SendDataService,private router:Router ,private srvGet:GetDataService) { }


  registrationFromG = this.fb.group({
    firstName :['',Validators.required],
    lastName : ['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]})
  

  ngOnInit(): void {
  }


  guard(firstName,lastName,email,password,ConfirmPassword){

    if(password !== ConfirmPassword){
      alert("אימות סיסמא שגוי")
      return
    }

    
    console.log(this.registrationFromG.valid);
    
    if(this.registrationFromG.valid){

      let id = Math.floor(Math.random() * 10000000);
      let person ={
        id,
        firstName,
        lastName,
        email,
        password
      }
      console.log(person);
      this.srvGet.addPerson(person)
      this.srvData.personU.next(person)
      

      
      // setTimeout(()=>{
      //   this.srvData.personUser.next(person)
      // },3000)
      
      
      
      console.log("go to can activ");
      this.router.navigate(['/home'])
      this.srvCanActivate.logIn = true
      
    }
    else{
      console.log('kafatz');
      console.log(this.registrationFromG.errors)
      alert("פרטים לא שלמים")
    }
    
  
  }
}
