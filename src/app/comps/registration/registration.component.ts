import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CanActivService } from 'src/app/can-activ.service';
import { Store } from '@ngrx/store';
import { addPerson } from 'src/app/services/stor/events';
import { AngularFirestore } from '@angular/fire/firestore';
import { GetDataService } from 'src/app/services/get-data.service';
import { ChatComponent } from '../chat/chat.component';
import { of } from 'rxjs';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  log 

  constructor(private fb:FormBuilder ,private srvCanActivate:CanActivService , private stor:Store<any>,private fireStore:AngularFirestore ,private srvData:GetDataService ) { }


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

    
    // this.stor.dispatch(addPerson(person));

    
    
    if(this.registrationFromG.valid){

      let id = Math.floor(Math.random() * 10000);
      let person ={
        id,
        firstName,
        lastName,
        email,
        password
      }
      
      setTimeout(()=>{
        this.srvData.personUser.next(person)
      },3000)
      
      this.srvData.addPerson(person)

      
      console.log("go to can activ");
      this.srvCanActivate.logIn = true
      
    }
    else{
      console.log('kafatz');
      alert("פרטים לא שלמים")
    }
    
  
  }
}
