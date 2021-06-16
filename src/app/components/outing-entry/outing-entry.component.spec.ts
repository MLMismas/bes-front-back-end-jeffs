import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutingEntryComponent } from './outing-entry.component';

describe('OutingEntryComponent', () => {
  let component: OutingEntryComponent;
  let fixture: ComponentFixture<OutingEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutingEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
