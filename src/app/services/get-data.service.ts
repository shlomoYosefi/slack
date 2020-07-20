import { Injectable } from '@angular/core';
import { GetHttpService } from './get-http.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  users:Observable<object>
  postim

  usersFromLog =[]

  sendDataMessege:Subject<null> = new Subject()


  constructor(private srvHttp:GetHttpService) {

    
    this.users = this.srvHttp.getHttp('https://5f14541b2710570016b37e30.mockapi.io/users');
    this.postim = this.srvHttp.getHttp('https://5f14541b2710570016b37e30.mockapi.io/post').subscribe(val=>this.postim=val)
    
   }

   getFilterDataMessege(name){
     console.log(this.postim.filter(val=>val.id ==name.id));
     

     let a = this.postim.filter(val=>val.id ==name.id);
     this.sendDataMessege.next(a)
   } 
}
