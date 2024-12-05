import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../services/modal.service'; 


import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
import { subscribe } from 'diagnostics_channel';
import { FlightService } from '../services/flight.service';
import { Flight } from '../models/flight';
import { Booking } from '../models/booking';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-add',
  templateUrl: '../views/reservations/booking-add.component.html',
  providers: [HotelService, FlightService, BookingService]
})
export class BookingAddComponent {

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  public title: String;
  public hotel: Hotel;
  public flight: Flight;
  public hotelId: any;
  public flightId: any;
  public booking: Booking;

  constructor(
    private _hotelService: HotelService,
    private _flightService: FlightService,
    private _bookingService: BookingService,
    private _modalService: ModalService,
    private _router: Router
  ) {

    this.hotelId = sessionStorage.getItem('hotelId');
    this.flightId = sessionStorage.getItem('flightId');

    this.title = "Reservas";
    this.hotel = new Hotel(0, '', '', 0, '');
    this.flight = new Flight(0, '', new Date(), 0, '');
    this.booking = new Booking(0, '', '', this.hotelId, this.flightId, new Date());
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

  getFlight() {
    this._flightService.getFlight(this.flightId).subscribe(
      (result: any) => {
        this.flight = result.flight;
      },
      (error: any) => {        
        this.sub = this._modalService
      .openModal(this.entry, 'Error ' , "Estamos presentando inconvenientes. Intente más tarde")
      .subscribe((v: any) => {
        
      });
      }
    );
  }

  onSubmit() {
    this.saveBooking();
  }

  saveBooking() {
    this._bookingService.addBooking(this.booking).subscribe(
      (response: any) => {
        this._router.navigate(['/bookings']);
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}