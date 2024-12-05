import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HotelsListComponent } from './hotels/hotels-list.component';
import { HotelAddComponent } from './hotels/hotel-add.component';
import { HotelEditComponent } from './hotels/hotel-edit.component';
import { HotelSelectComponent } from './reservations/hotel-select.component';
import { PlaneSelectComponent } from './reservations/plane-select.component';
import { BookingAddComponent } from './reservations/booking-add.component';
import { BookingListComponent } from './reservations/booking-list.component';
import { Base64Pipe } from './pipes/convert-base64-img.pipe';
import { ModalComponent } from './modal/modal.component';
import { DetailsComponent } from './reservations/details/details.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HotelsListComponent,
    HotelAddComponent,
    HotelEditComponent,
    HotelSelectComponent,
    Base64Pipe,
    PlaneSelectComponent,
    BookingAddComponent,
    BookingListComponent,
    ModalComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
