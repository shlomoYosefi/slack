import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Store, select } from '@ngrx/store';
import { selectUserNameFeature, usersFeature } from 'src/app/services/stor/selectorim';
import { SendDataService } from 'src/app/services/send-data.service';

@Component({
  selector: 'app-list-nams',
  templateUrl: './list-nams.component.html',
  styleUrls: ['./list-nams.component.css']
})
export class ListNamsComponent implements OnInit {

  users=[]
  myusers
  


  constructor(public srv: GetDataService, private stor: Store , private srvData:SendDataService) { }

  ngOnInit(): void {

    this.srvData.myUsers.subscribe(val=>{
      console.log(val[0])
      for( let i in val){
        this.users.push(val[i])
      }
    })

    // this.srv.myUsers.subscribe(val => {this.users = val, this.myusers=val})
    
    
  }

  sendPersom(person) {
    this.srv.getFilterDataMessege(person)
  }

  myinp(input) {
    this.users = this.myusers.filter((val) => val.firstName.toLowerCase().startsWith(input))
  }

  log() {
       

  }







}
