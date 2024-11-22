import { Component } from '@angular/core';


import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-booking-add',
  templateUrl: '../views/reservations/booking-add.component.html',
  providers: [HotelService]
})
export class BookingAddComponent {

  public title: String;
  public hotel: Hotel;
  public hotelId: any;
  public flightId: any;

  constructor(
    private _hotelService: HotelService
  ) {
    this.title = "Reservas";
    this.hotel = new Hotel(0, '', '', 0, '');
  }

  ngOnInit(): void {
    this.hotelId = sessionStorage.getItem('hotelId');
    this.flightId = sessionStorage.getItem('flightId');
    this.getHotel();
  }

  getHotel() {
    this._hotelService.getHotel(this.hotelId).subscribe(
      (result: any) => {
        this.hotel = result;
        console.log(this.hotel);
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }
}