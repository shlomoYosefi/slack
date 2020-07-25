import { Injectable } from '@angular/core';
import { GetHttpService } from './get-http.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  users:Observable<object>
  postim
  myPerson:Subject<null> = new Subject()
  aa

  usersFromLog =[]

  sendDataMessege:Subject<null> = new Subject()


  constructor(private srvHttp:GetHttpService) {

    
    this.users = this.srvHttp.getHttp('https://5f14541b2710570016b37e30.mockapi.io/users');
    
    
   }

   getFilterDataMessege(name){
  
  
     this.myPerson.next(name.name)

     this.srvHttp.getHttp(`https://5f14541b2710570016b37e30.mockapi.io/post/${name.id}`).subscribe(val => this.postim=val)
     this.sendDataMessege.next(this.postim)
     
     setTimeout(() => {
      

      // console.log(this.sendDataMessege);
     }, 3000);
     

     
     
   } 
   

   getAllSend(){
    return this.srvHttp.getHttp('https://5f14541b2710570016b37e30.mockapi.io/post')
   }


}
