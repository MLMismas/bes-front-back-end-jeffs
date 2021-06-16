import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { HomeComponent } from './components/home/home.component';
import { ParksComponent } from './components/parks/parks.component';
import { OutingEntryComponent } from './components/outing-entry/outing-entry.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'parks',
    component: ParksComponent,

  },
  {
    path: 'outing-entry',
    component: OutingEntryComponent
  },
  {
    path: '**',
    component: FourOhFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
