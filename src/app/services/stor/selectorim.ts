import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { IStatePerson, persone } from './events';
import { IStateArrPost, Post } from './postim';


export const selectFeature :MemoizedSelector<object,IStatePerson>= createFeatureSelector< IStatePerson>('users');

export const usersFeature:MemoizedSelector<object,persone[]> = createSelector(
  selectFeature,
  (state):persone[]=>state.personse 
)

export const selectUserNameFeature:MemoizedSelector<object,string[]> = createSelector(
    selectFeature,
  (state) :string[]=> state.personse.map(x => x.email)
);








export const selectFeaturePost :MemoizedSelector<object,IStateArrPost>= createFeatureSelector< IStateArrPost>('posts');

export const postsFeature:MemoizedSelector<object,Post[]> = createSelector(
  selectFeaturePost,
  (state):Post[]=>state.posts 
)

