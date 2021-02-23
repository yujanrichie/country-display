import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardItemDetailComponent } from './components/card-item-detail/card-item-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'country/:code', component: CardItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
