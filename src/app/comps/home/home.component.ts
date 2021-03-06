import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { CanActivService } from 'src/app/can-activ.service';
import { SendDataService } from 'src/app/services/send-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  constructor(private srv:SendDataService ,private gurd:CanActivService) { }
  ngOnDestroy(): void {
    this.gurd.logIn = false
    this.srv.personU =new BehaviorSubject(null)
  }

  ngOnInit(): void {
  }

  

}
