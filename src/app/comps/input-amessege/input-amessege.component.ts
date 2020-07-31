import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-input-amessege',
  templateUrl: './input-amessege.component.html',
  styleUrls: ['./input-amessege.component.css']
})
export class InputAMessegeComponent implements OnInit {

  input
  constructor(private srv:GetDataService) { }

  myPerson:string = "הודעה"
  myPersonSend:number
  mypersonSendTo:number
  ngOnInit(): void {
     this.srv.clickPerson.subscribe(val=>{this.myPerson= `הודעה ל${val.firstName} ${val.lastName}`,this.myPersonSend = val.id})
     this.srv.personUser.subscribe(val=> this.mypersonSendTo = val.id)
     this.input = document.getElementById('inputSend')

  }

  send(){
console.log(this.myPersonSend);
console.log(this.mypersonSendTo);

    let date =new Date();
    let text = this.input.value
    let address
    
    let addressee   
    this.srv.personUser.subscribe(val=> {console.log(val.id),addressee = val.id})

    let post ={
      address:this.mypersonSendTo,
      addressee:this.myPersonSend,
      date:date,
      text:text
    }
    console.log(post);
    this.srv.sendPost(post)
    this.input.value = ''


  }

  

 

 

}
