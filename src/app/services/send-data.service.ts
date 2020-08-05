import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { persone } from './stor/events';
import { Post } from './stor/postim';
import { Store, select } from '@ngrx/store';
import { selectFeature, selectFeaturePost } from './stor/selectorim';
import { GetDataService } from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  counter:number =0

  myUsers: Observable<any>
  myAllPosts:Observable<any>
  // myPost:Observable<any> = new Observable()

  clickPerson: Subject<persone> = new Subject()
  // sendDataMessege: Subject<persone> = new Subject()
  arrayPost = new BehaviorSubject<Post[]>(null)
  personU = new BehaviorSubject(null)




  constructor(private stor: Store<any>,private srvGet:GetDataService) { 

    this.myUsers =this.stor.pipe(select(selectFeature))
    this.myAllPosts = this.stor.pipe(select(selectFeaturePost))
    // this.personU = this.srvGet.personU
    this.counter = this.srvGet.counter
  }



  getFilterDataMessege(name) {
    
    let myUser
    // let itsPost=[]

    this.personU.subscribe(val=>{myUser = val})
    
    this.clickPerson.next(name)

    this.myAllPosts.subscribe(val=>{
      let arr =[]
      let itsPost=[]
      for (let i in val){
        
        if((val[i].address== name.id && val[i].addressee == myUser.id ) || (val[i].address== myUser.id && val[i].addressee ==name.id)){
          arr.push(val[i])
        };
      }
      console.log(arr);
      
      for (let i =0;i<arr.length;i++){
        for (let j of arr){
          console.log(j);
          
          if(j.id == i+1){
            console.log("lllllll");
            
            itsPost.push(j)
          }
        }
        
        
      }
      console.log(itsPost);
      
      this.arrayPost.next(itsPost)
      // this.myPost= of(itsPost)
    })}


    getAllPosts() {
      return this.myAllPosts
    }
}
