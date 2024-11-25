import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  public url: String;
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.urlFlight;
  }

  getFlightList(){
    return this._http.get(this.url + '/getFlightList');
  }

  getFlight(id:number){
    return this._http.get(this.url + '/'+id);
  }
}
