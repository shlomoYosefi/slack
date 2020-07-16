import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import{CanActivService}from './can-activ.service'
@Injectable({
  providedIn: 'root',
  
})
export class AutoGuard implements CanActivate {

  constructor(private srv:CanActivService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("canActivate");
      
      if (this.srv.getLogIn()){
        
        
    return true;}
    else{
      console.log(false);
      
      this.router.navigate
      return false
    }
  }
  
}
