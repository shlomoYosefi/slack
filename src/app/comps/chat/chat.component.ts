import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Subject, Observable, observable } from 'rxjs';
import { Post } from 'src/app/services/stor/postim';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy {
  
  
  myMessege 
  hello
  

  constructor(public srv:GetDataService) { }
  ngOnDestroy(): void {
    this.myMessege = ['']
  }
  

  ngOnInit(): void {
    console.log("dkdskfdsfsd");

    this.srv.arrayPost.subscribe(val=>{
      if(val == []){
        this.myMessege=["אין הודעות"]
      }
      else{
      this.myMessege=val}})   
    // this.srv.sendDataMessege.subscribe(val=>this.myMessege=[val])
    
    this.srv.personU.subscribe(val=> {
      if(val !=null){
      this.hello = `שלום ${val.firstName} ${val.lastName} `}})
  }

  allMesseg(){
    this.srv.getAllPosts().subscribe(data=>this.myMessege=data)
  }


}
