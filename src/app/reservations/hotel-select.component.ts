import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';


@Component({
  selector: 'app-hotel-select',
  templateUrl: '../views/reservations/hotel-select.component.html',
  providers: [HotelService]
})
export class HotelSelectComponent {

  public titulo: String;
  public hotelsList: Hotel[];
 
  constructor(
    private _hotelService: HotelService,
    private _sanitizer: DomSanitizer) {
    this.titulo = "Hoteles";
    this.hotelsList = [];    
  }

  ngOnInit(): void {
    this._hotelService.getAvailable().subscribe(
      (result: any) => {
        this.hotelsList = result;
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }
}