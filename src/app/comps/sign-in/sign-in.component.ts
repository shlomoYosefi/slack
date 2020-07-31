import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CanActivService } from 'src/app/can-activ.service';
import { GetDataService } from 'src/app/services/get-data.service';
import { persone } from 'src/app/services/stor/events';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {





  constructor(private fb: FormBuilder, private srvData: GetDataService, private srvCanActivate: CanActivService) { }


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

    this.srvData.myUsers.subscribe(val => {
      for (let i of val) {
        // console.log(val);
        if (i.email == email && i.password == password) {            
            this.srvData.personUser.next(i)
          this.srvCanActivate.logIn = true
          return
        }
      }
      if(this.signInFromG.valid){
        alert("פרטים לא נכונים")
      }
      else{
        alert("פרטים לא מלאים")

      }
      
      




    })






    // }

  }

}
