import { createAction, props } from '@ngrx/store';
import { Action, createReducer, on } from '@ngrx/store';

export interface persone {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password:string
}


export const addPerson = createAction(
  '[Add Person] Event',
  props<persone>()
);

export const removePerson = createAction(
  '[Remove Person] Event',
  props<{ id: number }>()
);

export const editPerson = createAction(
  '[edit Person] Event',
  props<{persone}>()
);





export interface IStatePerson {
    personse: persone[]
  
}

export const stateArrayPerson: IStatePerson = {
    personse: []
};





const eventsReducer = createReducer(
  stateArrayPerson,
  on(addPerson, (state: IStatePerson, newPerson: persone):IStatePerson => {
    
    
    return {...state,personse:[...state.personse,newPerson]}
  }),


  on(removePerson, (state ,id:{id:number}) => {
    
    let delPerson = state.personse.filter(event=>event.id!==id.id);
    
    return { ...state,delPerson} }),

);

export function reducer(state: IStatePerson | undefined, action: Action) {
  return eventsReducer(state, action);
}