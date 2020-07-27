import { Injectable } from '@angular/core';
import { GetHttpService } from './get-http.service';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { addPerson, persone } from './stor/events';
import { tap } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  myUsers: Observable<any>

  users: Observable<persone>
  myPerson: Subject<string> = new Subject()

  usersFromLog = []

  sendDataMessege: Subject<persone> = new Subject()


  constructor(private srvHttp: GetHttpService, private stor: Store<any>, private fireStore: AngularFirestore) {

    this.getPersonDb()
    this.getDataMokeApi()
  }



  getFilterDataMessege(name) {

    this.myPerson.next(name.name)
    this.srvHttp.getHttpPersons(`https://5f14541b2710570016b37e30.mockapi.io/post/${name.id}`).subscribe(val => {
      this.sendDataMessege.next(val)
    })

  }


  getAllPosts() {
    return this.srvHttp.getHttpPersons('https://5f14541b2710570016b37e30.mockapi.io/post')
  }


  getDataMokeApi() {
    this.users = this.srvHttp.getHttpPersons('https://5f14541b2710570016b37e30.mockapi.io/users')
    this.users.subscribe(per => {this.stor.dispatch(addPerson(per))})
    this.myUsers.subscribe(per=>this.stor.dispatch(addPerson(per)))
  }



  addPerson(person) {
    this.fireStore.collection("person").add(person)
    // this.stor.dispatch(addPerson(person));
  }


  sendPost() {
  }

  getPersonDb(){
    this.myUsers = this.fireStore.collection("person").valueChanges()
  }

  


}
