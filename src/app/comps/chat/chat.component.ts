import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  
  myMessege 

  constructor(private srv:GetDataService) { }

  ngOnInit(): void {  
    this.srv.sendDataMessege.subscribe(data => this.myMessege = data)
    
  }

  allMesseg(){
    this.myMessege=[]
    this.myMessege = this.srv.postim
  }


}
