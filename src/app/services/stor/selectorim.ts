import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { IStatePerson, persone } from './events';


export const selectFeature :MemoizedSelector<object,IStatePerson>= createFeatureSelector< IStatePerson>('users');

export const usersFeature:MemoizedSelector<object,persone[]> = createSelector(
  selectFeature,
  (state):persone[]=>state.personse
)

export const selectUserNameFeature:MemoizedSelector<object,string[]> = createSelector(
    selectFeature,
  (state) :string[]=> state.personse.map(x => x.email)
);