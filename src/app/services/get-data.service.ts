import { Injectable } from '@angular/core';
import { GetHttpService } from './get-http.service';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { addPerson, persone, editPerson, IStatePerson } from './stor/events';
import { tap, filter } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Post } from './stor/postim';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  myUsers: Observable<any>
  myAllPosts:Observable<any>

  myPost:Subject<any> = new Subject()
  clickPerson: Subject<persone> = new Subject()
  personUser:Subject<any> = new Subject()
  sendDataMessege: Subject<persone> = new Subject()

  

  usersFromLog = []



  constructor(private srvHttp: GetHttpService, private stor: Store<any>, private fireStore: AngularFirestore) {

    // this.getPersonDb()

    this.myUsers = this.fireStore.collection("person").valueChanges()
    this.myAllPosts = this.fireStore.collection("posts").valueChanges()

    this.myUsers.subscribe(val=>{console.log(val)/*,this.stor.dispatch(editPerson({persons:val}))*/})
    this.myAllPosts.subscribe(val=>{console.log(val)})
    // this.myUsers.subscribe(per=>this.stor.dispatch(editPerson(per)))
    

    this.getDataMokeApi()
  }



  getFilterDataMessege(name) {
    
    let send=[] 
    let myUser
    this.personUser.subscribe(vv=>{myUser=vv,console.log(vv)})
    setTimeout(()=>{
      console.log("klklklkl");
      console.log(name);
      console.log(myUser);
    },3000)
    
    
    this.clickPerson.next(name)
    
    this.myAllPosts.subscribe(val=>{
      for (let i of val){
        
        if(i.address== name.id ){
          console.log(name.id)
          console.log(i.address)
          console.log(myUser);
          
        };
        
      }
      
    })
    
    
    // this.srvHttp.getHttpPersons(`https://5f14541b2710570016b37e30.mockapi.io/post/${name.id}`).subscribe(val => {
    //   this.sendDataMessege.next(val)
    // })

  }


  getAllPosts() {
    return this.srvHttp.getHttpPersons('https://5f14541b2710570016b37e30.mockapi.io/post')
  }


  getDataMokeApi() {
    // this.users = this.srvHttp.getHttpPersons('https://5f14541b2710570016b37e30.mockapi.io/users')
    // this.users.subscribe(per => {this.stor.dispatch(addPerson(per))})
    
  }



  addPerson(person) {
    // console.log((person));
    

    this.fireStore.collection("person").add(person)
    
    // this.stor.dispatch(editPerson(this.myUsers));
    // this.stor.dispatch(addPerson(person));

  }


  sendPost(post) {
    this.fireStore.collection("posts").add(post)
  }


  editPersonUser(per){
    console.log(per);
    
    this.personUser.next(per)
  }

  


}
