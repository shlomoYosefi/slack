import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHttpService {

  constructor(private http:HttpClient) { }


  getHttp(url){
   return this.http.get(url)
  }

}
