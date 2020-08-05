import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { SendDataService } from 'src/app/services/send-data.service';
import { persone } from 'src/app/services/stor/events';

@Component({
  selector: 'app-input-amessege',
  templateUrl: './input-amessege.component.html',
  styleUrls: ['./input-amessege.component.css']
})
export class InputAMessegeComponent implements OnInit {

  input
  constructor(private srv:GetDataService, private srvData:SendDataService) { }

  myPerson:string = "הודעה"
  myPersonSend:persone
  mypersonSendTo:number
  ngOnInit(): void {
     this.srvData.clickPerson.subscribe(val=>{this.myPersonSend = val,this.myPerson= `הודעה ל${val.firstName} ${val.lastName}`})
    //  this.srv.personU.subscribe(val=> this.mypersonSendTo = val.id)
     this.input = document.getElementById('inputSend')

  }

  send(){
// console.log(this.myPersonSend);

    let date =new Date();
   

    
//     console.log(date);
    
    let text = this.input.value
    let address
    let addressName
    let addressee =this.myPersonSend.id  
    let addresseeName= `${this.myPersonSend.firstName} ${this.myPersonSend.lastName}`
    
    
    
    this.srvData.personU.subscribe(val=> {
      address = val.id
      addressName = `${val.firstName} ${val.lastName}`
    
    })
    

    let post ={
      id:++this.srvData.counter,
      address:address,
      addressName:addressName,
      addressee:addressee,
      addresseeName:addresseeName,
      date:new Date(),
      dateTime:date.toLocaleTimeString(),
      dateDay:date.toLocaleDateString(),
      text:text
    };
    
    this.srv.sendPost(post)
    this.input.value = ''
    


  }


  return(){
    if (this.myPersonSend ==undefined){
      this.input.value = ''
      alert("הכנס נמען שאתה רוצה לשלוח לו")
    }
    
  }

  

 

 

}
