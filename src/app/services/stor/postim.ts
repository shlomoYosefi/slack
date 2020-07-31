import { createAction, props } from '@ngrx/store';
import { Action, createReducer, on } from '@ngrx/store';
import { persone } from './events';

export interface Post {
  idPerson:number
  id: number;
  text: string;
  date: string;
  addressee:number
}


export const addPost = createAction(
  '[Add Post] Post',
  props<Post>()
);

export const removePost = createAction(
  '[Remove Post] Post',
  props<{ id: number }>()
);

export const editPost = createAction(
  '[edit Person] Post',
  props<{Post}>()
);





export interface IStateArrPost {
    posts: Post[]
  
}

export const stateArrayPost: IStateArrPost = {
    posts: []
};





const eventsReducer = createReducer(
  stateArrayPost,
  on(addPost, (state: IStateArrPost, newPost: Post):IStateArrPost => {
    
    
    return {...state,posts:[...state.posts,newPost]}
  }),


  on(removePost, (state ,id:{id:number}) => {
    
    let delPost = state.posts.filter(post=>post.id!==id.id);
    
    return { ...state,delPost} }),

);

export function reducer(state: IStateArrPost | undefined, action: Action) {
  return eventsReducer(state, action);
}