import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectParksComponentViewModel } from 'src/app/reducers';
import { ParkViewModel, ParkViewModelListItem } from 'src/app/view-models/parks';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {


  parkList$!: Observable<ParkViewModel>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.parkList$ = this.store.select(selectParksComponentViewModel);

  }



}
