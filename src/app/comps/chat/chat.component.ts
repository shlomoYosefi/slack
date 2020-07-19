import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  mySpanMesseg
  users=[]
  myMessege =[]

  constructor(private srv:DataService) { }

  ngOnInit(): void {
    this.mySpanMesseg = document.querySelector('#messeg')
   this.users = this.srv.users
  }

  getMessege(mygrup:string){
    this.myMessege =[]
    for (let i of this.srv.messeges){
      // console.log(myName);
      // console.log(i.name);
      
      if (i.grup == mygrup){
        this.myMessege.push(i.messeg)
      }   
    }
    
    console.log(this.myMessege);
    
}

}
