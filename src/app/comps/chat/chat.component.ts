import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Subject, Observable, observable } from 'rxjs';
import { SendDataService } from 'src/app/services/send-data.service';
import { persone } from 'src/app/services/stor/events';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy {
  
  
  myMessege =[]
  myAllMessege=[]
  hello:string
  myUser:persone
  userClick:persone

  constructor( private srvData:SendDataService) { }
  
  

  ngOnInit(): void {

    this.srvData.personU.subscribe(val=>this.myUser=val)
    this.srvData.clickPerson.subscribe(val=>this.userClick=val)

    this.srvData.arrayPost.subscribe(val=>{console.log(val),this.myMessege=val})
    
    this.srvData.personU.subscribe(val=> {
      if(val !=null){
      this.hello = `שלום ${val.firstName} ${val.lastName} `}})
  }




  allMesseg(){
    this.srvData.myAllPosts.subscribe(val=>{
      console.log(val);
      this.myAllMessege=[]
      for( let i in val){
        
        if(val[i] !=''){
        this.myAllMessege.push(val[i])}
        this.myMessege = this.myAllMessege  
      }
      this.myAllMessege.sort(function(a,b){
        return a.id - b.id
      })
      
      
    })
    
    
    

  }
  ngOnDestroy(): void {
    this.myMessege = ['']

  }


}
