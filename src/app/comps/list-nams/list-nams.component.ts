import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-list-nams',
  templateUrl: './list-nams.component.html',
  styleUrls: ['./list-nams.component.css']
})
export class ListNamsComponent implements OnInit {

  users
  myusers
  
  

  constructor(public srv:GetDataService) { }

  ngOnInit(): void {
    this.srv.users.subscribe(val => this.users = val)
    this.srv.users.subscribe(val => this.myusers = val)
    
    
    
  }

  sendPersom(person){
    
    this.srv.getFilterDataMessege(person)  
  }

  myinp(input){
    this.users = this.myusers.filter((val) => val.firstName.toLowerCase().startsWith(input))
  }


}
