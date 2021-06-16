import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs/operators";
import { environment } from '../../environments/environment';
import * as actions from '../actions/outings.actions';

@Injectable()
export class OutingsEffects {

  readonly baseUrl = environment.apiUrl + 'api/scheduledoutings';

  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.outingCreated),
      switchMap(a => this.client.post(this.baseUrl, a.payload))
    )
    , { dispatch: false })

  constructor(private actions$: Actions, private client: HttpClient) { }
}
