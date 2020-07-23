import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-list-nams',
  templateUrl: './list-nams.component.html',
  styleUrls: ['./list-nams.component.css']
})
export class ListNamsComponent implements OnInit {

  users
  // @Output() myInput: EventEmitter<string> = new EventEmitter<string>()  

  constructor(public srv:GetDataService) { }

  ngOnInit(): void {
    this.users = this.srv.users
    // this.myInput= document.querySelector('.myInput').addEventListener('input',this.sendInput(this))
    
    // this.users = this.srv.users
    
  }

  sendPersom(person){
    this.srv.getFilterDataMessege(person)  
  }

  myinp(input){
    // this.myInput.emit(input)
  }


}
