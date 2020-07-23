import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-input-amessege',
  templateUrl: './input-amessege.component.html',
  styleUrls: ['./input-amessege.component.css']
})
export class InputAMessegeComponent implements OnInit {

  constructor(private srv:GetDataService) { }

  myPerson:string = "messeage"
  ngOnInit(): void {
     this.srv.myPerson.subscribe(val=>this.myPerson= `messeage to  ${val}`)
  }

}
