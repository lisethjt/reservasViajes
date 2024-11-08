import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HotelsListComponent } from './hotels/hotels-list.component';
import { HotelAddComponent } from './hotels/hotel-add.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  {path: 'hotels', component: HotelsListComponent },
  {path: 'new-hotel', component: HotelAddComponent },
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
