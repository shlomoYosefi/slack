import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  messeges = [{name:"שלמה" ,messeg:"?מה נשמע איך אתה מרגיש"},
  {name:"שלמה" ,messeg:"?מה נשמע איך אתה מרגיש"},
  {name:"שלמה" ,messeg:"?איפה לומד"},
  {name:"שלמה" ,messeg:"?מתי חוזר הביתה"},
  {name:"יעקב" ,messeg:"?למה לא עונה לי"},
  {name:"יעקב" ,messeg:"?מתי מסיימים היום"},
  {name:"יעקב" ,messeg:"?מצאת עבודה"},
  {name:"שלמה" ,messeg:"?מתי קופץ לביקור"},
  {name:"אריאל" ,messeg:"?מתי מבחן , יודע משהו"},
  {name:"אריאל" ,messeg:"?איך קוראים למורה שלכם עכשיו"}]

  

  users :any =["שלמה" ,"יעקב","אריאל"]
  
  constructor() { }







}