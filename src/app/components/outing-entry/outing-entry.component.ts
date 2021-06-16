import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { outingCreated } from 'src/app/actions/outings.actions';
import { AppState, selectParksForDropdown } from 'src/app/reducers';

@Component({
  selector: 'app-outing-entry',
  templateUrl: './outing-entry.component.html',
  styleUrls: ['./outing-entry.component.css']
})
export class OutingEntryComponent implements OnInit {


  dropDowndata$!: Observable<{ id: string, text: string }[]>;
  form!: FormGroup;
  constructor(private fb: FormBuilder,
    private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      parkId: [''],
      when: [''],
      who: [''],
      notes: [''],
      numberOfPeople: ['']
    })

    this.dropDowndata$ = this.store.select(selectParksForDropdown);
  }

  submit() {
    this.store.dispatch(outingCreated({ payload: this.form.value }));
    console.log(this.form.value);
  }
}
