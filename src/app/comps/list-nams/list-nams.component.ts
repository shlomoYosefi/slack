import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-list-nams',
  templateUrl: './list-nams.component.html',
  styleUrls: ['./list-nams.component.css']
})
export class ListNamsComponent implements OnInit {


  users

  constructor(public srv:GetDataService) { }

  ngOnInit(): void {
    // this.users = this.srv.users
    
  }

  getPersom(person){
    this.srv.getFilterDataMessege(person)  
  }

}
