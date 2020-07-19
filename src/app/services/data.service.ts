import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  messeges = [{name:"שלמה" ,messeg:"?מה נשמע איך אתה מרגיש" ,date:'27/06/2020' , time:'15:38'},
  {grup:'python',name:"שלמה" ,messeg:"?מה נשמע איך אתה מרגיש",date:'27/05/2020' , time:'7:38'},
  {grup:'java',name:"שלמה" ,messeg:"?איפה לומד",date:'27/05/2020' , time:'2:38'},
  {grup:'java',name:"שלמה" ,messeg:"?מתי חוזר הביתה",date:'27/04/2020' , time:'3:38'},
  {grup:'java',name:"יעקב" ,messeg:"?למה לא עונה לי",date:'27/06/1999' , time:'22:38'},
  {grup:'angular',name:"יעקב" ,messeg:"?מתי מסיימים היום",date:'27/06/2019' , time:'4:38'},
  {grup:'angular',name:"יעקב" ,messeg:"?מצאת עבודה",date:'27/06/2018' , time:'9:38'},
  {grup:'angular',name:"שלמה" ,messeg:"?מתי קופץ לביקור",date:'27/06/2019' , time:'15:55'},
  {grup:'python',name:"אריאל" ,messeg:"?מתי מבחן , יודע משהו",date:'27/06/2018' , time:'15:44'},
  {grup:'angular',name:"אריאל" ,messeg:"?איך קוראים למורה שלכם עכשיו",date:'27/06/2020' , time:'16:38'}]

  

  users :any =["python" ,"java ","angular"]
  
  constructor() { }







}