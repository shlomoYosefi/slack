import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  constructor(private srv:GetDataService) { }
  ngOnDestroy(): void {
    this.srv.personUser=new Subject()
  }

  ngOnInit(): void {
  }

  

}
