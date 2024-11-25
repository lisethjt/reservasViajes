import { Component } from '@angular/core';


import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
import { subscribe } from 'diagnostics_channel';
import { FlightService } from '../services/flight.service';
import { Flight } from '../models/flight';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-booking-add',
  templateUrl: '../views/reservations/booking-add.component.html',
  providers: [HotelService, FlightService]
})
export class BookingAddComponent {

  public title: String;
  public hotel: Hotel;
  public flight: Flight;
  public hotelId: any;
  public flightId: any;
  public booking: Booking;

  constructor(
    private _hotelService: HotelService, 
    private _flightService: FlightService
  ) {

    this.hotelId = sessionStorage.getItem('hotelId');
    this.flightId = sessionStorage.getItem('flightId');

    this.title = "Reservas";
    this.hotel = new Hotel(0, '', '', 0, '');
    this.flight = new Flight(0, '', new Date(), 0, '');
    this.booking = new Booking(0, '','', this.hotelId, this.flightId);
  }

  ngOnInit(): void {   
    this.getHotel();
    this.getFlight();
  }

  getHotel() {
    this._hotelService.getHotel(this.hotelId).subscribe(
      (result: any) => {
        this.hotel = result;       
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }

  getFlight(){
    this._flightService.getFlight(this.flightId).subscribe(
      (result:any)=>{
        this.flight = result.flight;
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(){
    
  }
}