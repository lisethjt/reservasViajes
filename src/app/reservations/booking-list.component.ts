import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-booking-list',
  templateUrl: '../views/reservations/booking-list.component.html',
  providers: [BookingService]
})
export class BookingListComponent {

  public bookingList: Booking[];

  constructor(
    private _bookingService: BookingService
  ){
    this.bookingList = [];
  }

  ngOnInit(): void {
    this.getBookingList();
  }

  getBookingList(){
      this._bookingService.getAll().subscribe(
        (result:any)=>{
           this.bookingList = result.bookingList;
        },
        (error:any)=>{
          console.log(<any>error);
        }
      );
  }
}