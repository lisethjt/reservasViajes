import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { GLOBAL } from './global';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public url: String;
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.urlBooking;
  }

  addBooking(booking: Booking) {
    return this._http.post(this.url + '/addBooking', booking, { responseType: 'text' });
  }

  getAll(){
     return this._http.get(this.url + '/getBookingList');
  }
}
