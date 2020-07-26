import { Injectable } from '@angular/core';
import { GetHttpService } from './get-http.service';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { addPerson,persone } from './stor/events';
import{tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  users:Observable<persone>
  myPerson:Subject<null> = new Subject()

  usersFromLog =[]

  sendDataMessege:Subject<object> = new Subject()


  constructor(private srvHttp:GetHttpService,private stor:Store<any>) {
    this.getDataMokeApi()
   }

   

   getFilterDataMessege(name){
  
  
     this.myPerson.next(name.name)

     this.srvHttp.getHttp(`https://5f14541b2710570016b37e30.mockapi.io/post/${name.id}`).subscribe(val =>{
      this.sendDataMessege.next(val)
    })
  
   } 
   

   getAllSend(){
    return this.srvHttp.getHttp('https://5f14541b2710570016b37e30.mockapi.io/post')
   }

   getDataMokeApi(){
    this.users = this.srvHttp.getHttp('https://5f14541b2710570016b37e30.mockapi.io/users')
    this.users.subscribe(per => this.stor.dispatch(addPerson(per)))  
   }


}
