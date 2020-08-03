import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){    
    this.router.navigate(['/logIn'])
  }

  registration(){
    this.router.navigate(['/registration'])
  }

}
