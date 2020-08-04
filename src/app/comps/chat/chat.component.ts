import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Subject, Observable, observable } from 'rxjs';
import { SendDataService } from 'src/app/services/send-data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy {
  
  
  myMessege =[]
  myAllMessege=[]
  hello
  

  constructor(public srv:GetDataService , private srvData:SendDataService) { }
  ngOnDestroy(): void {
    this.myMessege = ['']

  }
  

  ngOnInit(): void {

    this.srvData.arrayPost.subscribe(val=>{this.myMessege=val})
    
    this.srvData.personU.subscribe(val=> {
      if(val !=null){
      this.hello = `שלום ${val.firstName} ${val.lastName} `}})
  }




  allMesseg(){
    this.srvData.myAllPosts.subscribe(val=>{
      this.myAllMessege=[]
      for( let i in val){
        console.log(val[i].date);
        if(val[i] !=''){
        this.myAllMessege.push(val[i])}
        this.myMessege = this.myAllMessege
        
      }
      
    })
  }


}
