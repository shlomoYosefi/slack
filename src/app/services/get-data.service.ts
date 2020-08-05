import { Injectable } from '@angular/core';
import { GetHttpService } from './get-http.service';
import { Observable, Subject, observable, of, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { addPerson, persone, editPerson, IStatePerson, removePerson } from './stor/events';
import { tap, filter } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Post, editPost } from './stor/postim';
import { SendDataService } from './send-data.service';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  counter:number = 0

  myUsers: Observable<any> =new Observable()
  myAllPosts:Observable<any>=new Observable()

  // personU = new BehaviorSubject(null)

  




  constructor(private stor: Store<any>, private fireStore: AngularFirestore ) {


    this.myUsers = this.fireStore.collection("person").valueChanges()

    this.myUsers.subscribe(val=> this.stor.dispatch(editPerson({personse:val})))

    this.myAllPosts = this.fireStore.collection("posts").valueChanges()

    this.myAllPosts.subscribe(val=> {

      this.counter = val.length
      this.stor.dispatch(editPost({posts:val}))})

  }




  addPerson(person) {
    this.fireStore.collection("person").add(person)
  }


  sendPost(post) {   
    this.fireStore.collection("posts").add(post)
  }


  


  

  


}
