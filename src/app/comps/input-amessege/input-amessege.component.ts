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
     this.srv.clickPerson.subscribe(val=>{this.myPersonSend = val.id,this.myPerson= `הודעה ל${val.firstName} ${val.lastName}`,this.myPersonSend = val.id})
     this.srv.personU.subscribe(val=> this.mypersonSendTo = val.id)
     this.input = document.getElementById('inputSend')

  }

  send(){
console.log(this.myPersonSend);

    let date =new Date();
    console.log(date);
    
    let text = this.input.value
    let address
    
    let addressee =this.myPersonSend  
    this.srv.personU.subscribe(val=> {console.log(val.id),address = val.id})
    

    let post ={
      address:address,
      addressee:addressee,
      date:new Date(),
      // dateDay:`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} `,
      // dateTime:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `,
      text:text
    };
    
    this.srv.sendPost(post)
    this.input.value = ''


  }

  

 

 

}
