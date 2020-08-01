import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Subject, Observable, observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  
  myMessege 
  hello
  aa

  constructor(public srv:GetDataService) { }

  ngOnInit(): void {  
    this.srv.sendDataMessege.subscribe(val=>this.myMessege=[val])
    this.srv.personUser.subscribe(val=> {this.hello = `שלום ${val.firstName} ${val.lastName} `})
    this.srv.personUser.subscribe(val=> this.aa = val)

  }

  allMesseg(){
    console.log(this.aa);
    
    this.srv.getAllPosts().subscribe(data=>this.myMessege=data)
  }


}
