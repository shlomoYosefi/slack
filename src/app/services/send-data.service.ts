import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { persone } from './stor/events';
import { Post } from './stor/postim';
import { Store, select } from '@ngrx/store';
import { selectFeature } from './stor/selectorim';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {


  myUsers: Observable<any>
  myAllPosts:Observable<any>
  myPost:Observable<any> = new Observable()

  clickPerson: Subject<persone> = new Subject()
  // sendDataMessege: Subject<persone> = new Subject()
  arrayPost = new BehaviorSubject<Post[]>(null)
  personU = new BehaviorSubject(null)




  constructor(private stor: Store<any>,) { 

    this.myUsers =this.stor.pipe(select(selectFeature))
  }



  getFilterDataMessege(name) {
    
    let myUser
    let itsPost=[]

    this.personU.subscribe(val=>{myUser = val})
    this.clickPerson.next(name)
    this.myAllPosts.subscribe(val=>{

      for (let i of val){
        if((i.address== name.id && i.addressee == myUser.id ) || (i.address== myUser.id && i.addressee ==name.id  )){
          itsPost.push(i)
        };
      }
      this.arrayPost.next(itsPost)
      this.myPost= of(itsPost)
    })}


    getAllPosts() {
      return this.myAllPosts
    }
}
