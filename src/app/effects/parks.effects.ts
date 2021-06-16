import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import * as appActions from '../actions/app.actions';
import * as parkActions from '../actions/parks.actions';
import { ParksModel } from "../reducers/parks.reducer";

@Injectable()
export class ParkEffects {


  readonly baseUrl = environment.apiUrl + 'references/parks'

  // applicationStarted -> parksLoaded - "stream processing"

  loadParks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationIsStarted),
      switchMap(() => this.client.get<{ data: ReservationDataFromServer[] }>(this.baseUrl).pipe(
        map(response => response.data),
        map(data => data.map(turnAresponseItemIntoAPark)),
        map(payload => parkActions.parksLoaded({ payload }))
      ))
    )
  )



  // logItOut$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log('Got an action of type: ', a.type))
  //   )

  //   , { dispatch: false });


  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface ReservationDataFromServer {
  id: string;
  reservation: string;
  acreage: string;
  notes: string;
}

const turnAresponseItemIntoAPark = (d: ReservationDataFromServer) => {
  return {
    id: d.id,
    name: d.reservation,
    acreage: d.acreage,
    notes: d.notes
  } as ParksModel
}
