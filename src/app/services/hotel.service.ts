import { Injectable, Pipe } from '@angular/core';

import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GLOBAL } from './global';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public url: String;
  constructor(private _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  getHotels(){    
    return this._http.get(this.url + 'getHotels');
  }
}
