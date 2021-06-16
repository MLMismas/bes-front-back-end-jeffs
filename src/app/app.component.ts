import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { applicationIsStarted } from './actions/app.actions';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outings-client';

  constructor(store: Store<AppState>) {
    store.dispatch(applicationIsStarted()); // "Well, that happened. Whatever that means!"
  }
}
