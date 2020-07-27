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
  

  constructor(private srv:GetDataService) { }

  ngOnInit(): void {  
    this.srv.sendDataMessege.subscribe(val=>this.myMessege=[val])
    
  }

  allMesseg(){
    console.log(this.myMessege);
    
    this.srv.getAllPosts().subscribe(data=>this.myMessege=data)
  }


}
