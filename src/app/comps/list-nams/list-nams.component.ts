import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Store, select } from '@ngrx/store';
import { selectUserNameFeature, usersFeature } from 'src/app/services/stor/selectorim';

@Component({
  selector: 'app-list-nams',
  templateUrl: './list-nams.component.html',
  styleUrls: ['./list-nams.component.css']
})
export class ListNamsComponent implements OnInit {

  users
  myusers = []
  aa


  constructor(public srv: GetDataService, private stor: Store) { }

  ngOnInit(): void {

    // this.srv.users.subscribe(val => this.users = val)
    this.stor.pipe(select(usersFeature)).subscribe(val => { this.aa = val, this.log(this.aa) })
    // this.srv.users.subscribe(val => this.myusers = val)



  }

  sendPersom(person) {

    this.srv.getFilterDataMessege(person)
  }

  myinp(input) {
    this.users = this.myusers.filter((val) => val.firstName.toLowerCase().startsWith(input))
  }

  log(xx) {
    //   this.stor.pipe(select(selectUserNameFeature)).subscribe(val =>{this.aa =val , console.log(val);
    //   })      
    
    
    
    for (let i in xx[0]) {

      xx.forEach(element => {
        if (element[i].firstName != null ) {
          this.myusers.push(element[i])
        }
      });
    }
    console.log(this.myusers);



  }







}
