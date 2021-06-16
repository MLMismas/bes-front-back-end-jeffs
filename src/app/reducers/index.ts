import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromParks from './parks.reducer';
import * as fromParksViewModels from '../view-models/parks';

/** This is a description of the application state for TypeScript */
export interface AppState {
  parks: fromParks.ParksState
}


/** this is a map of the parts of the application state and which reducer function deals with it.
 * @summary the ActionReducerMap is used to make sure we haven't gotten dumb typos.
 */
export const reducers: ActionReducerMap<AppState> = {
  parks: fromParks.reducer
}

// Selector Functions (like queries, let us look stuff up from the state)

// 1 - one per branch (property of the state)

const selectParksBranch = createFeatureSelector<fromParks.ParksState>('parks');

// 2 - helpers

const selectNumberOfParks = createSelector(
  selectParksBranch,
  fromParks.selectTotalParks
);

const selectParksModelArray = createSelector(
  selectParksBranch,
  fromParks.selectAllParkModelArray
);


// 3 - What the components need
export const selectParksComponentViewModel = createSelector(
  selectNumberOfParks,
  selectParksModelArray,
  (n: number, p: fromParks.ParksModel[]) => {
    return {
      numberOfParks: n,
      list: p
    } as fromParksViewModels.ParkViewModel;
  }
)


export const selectParksForDropdown = createSelector(
  selectParksModelArray,
  (parks) => parks.map(p => ({ id: p.id, text: p.name }))
)
