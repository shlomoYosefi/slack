import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHttpService {

  constructor(private http:HttpClient) { }


  getHttpPersons(url):Observable<any>{
   return this.http.get(url)
  }

}
