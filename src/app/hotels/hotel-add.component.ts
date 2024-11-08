import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-add',
  templateUrl: '../views/hotel-add.component.html',
  providers: [HotelService]
})
export class HotelAddComponent {

  public titulo: String;
  public hotel: Hotel;

  constructor(
    private _hotelService: HotelService,
		private _route: ActivatedRoute,
		private _router: Router
  ) {
    this.titulo = "Crear Hotel";
    this.hotel = new Hotel(0, '', '', 0);
  }

  onSubmit() {
    console.log('tartatatata' + this.hotel.name);
    this._hotelService.addHotel(this.hotel).subscribe(
      (response: any) => {
        this._router.navigate(['/hotels']);
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }
}