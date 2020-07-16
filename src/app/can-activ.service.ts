import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanActivService {

  logIn =false
  constructor() { }


  getLogIn(){
    console.log(this.logIn);
    
    return this.logIn
  }
}
