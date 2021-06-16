import { createAction, props } from '@ngrx/store';
import { ParksModel } from '../reducers/parks.reducer';


export const parksLoaded = createAction(
  '[parks command] parks data loaded',
  props<{ payload: ParksModel[] }>()
)


/*
{
  type: '[parks command] parks data loaded,
  payload: [

  ]


}
*/
