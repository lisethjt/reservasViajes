import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HotelsListComponent } from './hotels/hotels-list.component';
import { HotelAddComponent } from './hotels/hotel-add.component';
import { HotelEditComponent } from './hotels/hotel-edit.component';
import { HotelSelectComponent } from './reservations/hotel-select.component';
import { PlaneSelectComponent } from './reservations/plane-select.component';
import { BookingAddComponent } from './reservations/booking-add.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  {path: 'hotels', component: HotelsListComponent },
  {path: 'new-hotel', component: HotelAddComponent },
  {path: 'edit-hotel/:id', component: HotelEditComponent },
  {path: 'select-hotel', component: HotelSelectComponent },
  {path: 'select-plane/:hotelId', component: PlaneSelectComponent },  
  {path: 'app-booking', component: BookingAddComponent },  
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
