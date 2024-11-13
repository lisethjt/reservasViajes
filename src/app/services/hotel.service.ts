import { Injectable, Pipe } from '@angular/core';

import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GLOBAL } from './global';
import { Hotel } from '../models/hotel';
import { urlencoded } from 'express';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public url: String;
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getHotels() {
    return this._http.get(this.url + '/getAll');
  }

  addHotel(hotel: Hotel) {
    return this._http.post(this.url + '', hotel, { responseType: 'text' });
  }

  getHotel(id: number) {
    return this._http.get(this.url + '/' + id);
  }

  updateHotel(hotel: Hotel, id: number) {
    return this._http.put(this.url + '/' + id, hotel, { responseType: 'text' })
  }

  deteleHotel(id: number) {
    return this._http.get(this.url + '/delete/' + id);
  }

  getAvailable() {
    return this._http.get(this.url + '/getAvailable');
  }
}