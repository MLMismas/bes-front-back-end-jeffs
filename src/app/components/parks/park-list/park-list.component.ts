import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectParksComponentViewModel } from 'src/app/reducers';
import { ParkViewModel } from 'src/app/view-models/parks';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css']
})
export class ParkListComponent implements OnInit {

  parks$!: Observable<ParkViewModel>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.parks$ = this.store.select(selectParksComponentViewModel);
  }

}
