import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CanActivService } from 'src/app/can-activ.service';
import { GetDataService } from 'src/app/services/get-data.service';
import { persone, IStatePerson } from 'src/app/services/stor/events';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { arraysAreNotAllowedMsg } from '@ngrx/store/src/models';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { usersFeature, selectFeature } from 'src/app/services/stor/selectorim';
import { SendDataService } from 'src/app/services/send-data.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {





  constructor(private fb: FormBuilder, private srvData: SendDataService, private srvCanActivate: CanActivService ,private router:Router,private store:Store<IStatePerson> ,private srv:GetDataService) { }


  signInFromG = this.fb.group({
    myEmail: ['', [Validators.required, Validators.email]],
    myPassword: ['', [Validators.required, Validators.min(9)]],
    remmberMe: ['']
  })

  ngOnInit(): void {
  }


  onSubmitForm() {


    let user = []
    // user.push(this.signInFromG.controls.myEmail.value,this.signInFromG.controls.myPassword.value,rememberMe)
    // this.srvData.usersFromLog.push(user)




  }


  guard(email, password, rememberMe) {

    this.srv.myUsers.subscribe(val => {
      
      for (let i of val) {
        if (i.email == email && i.password == password) {       
          this.srvData.personU.next(i)
          this.srvData.personU.subscribe(vv=>console.log(vv))
          this.router.navigate(['/home'])
          this.srvCanActivate.logIn = true
          return
        }
      }
      if (this.signInFromG.valid) {
        alert("פרטים לא נכונים")
      }
      else {
        alert("פרטים לא מלאים")

      }

    })
  }




  log(){    
    this.store.pipe(select(selectFeature)).subscribe(val=>console.log(val))    
  }



}
