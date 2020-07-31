import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  
  myMessege 
  hello

  constructor(public srv:GetDataService) { }

  ngOnInit(): void {  
    this.srv.sendDataMessege.subscribe(val=>this.myMessege=[val])
    this.srv.personUser.subscribe(val=> this.hello = `שלום ${val.firstName} ${val.lastName} `)
  }

  allMesseg(){
    // console.log(this.hello);
    
    this.srv.getAllPosts().subscribe(data=>this.myMessege=data)
  }


}
