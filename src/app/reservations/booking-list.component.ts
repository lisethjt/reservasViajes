import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: '../views/reservations/booking-list.component.html',
  providers: [BookingService, DetailService]
})
export class BookingListComponent {

  public bookingList: Booking[];

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  constructor(
    private _bookingService: BookingService,
    private _detailService: DetailService
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

  openModal(bookingId: any, hotelId: any, flightId: any) {        
    let body = hotelId + "|" + flightId;
    this.sub = this._detailService
      .openModal(this.entry, 'Reserva N° ' + bookingId, body)
      .subscribe((v: any) => {
        
      });
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}