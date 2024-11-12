import { Component } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: '../views/hotels-list.component.html',
  providers: [HotelService]
})
export class HotelsListComponent {

  public titulo: String;
  public hotelsList: Hotel[];
  public confirmed: any;

  constructor(
    private _hotelService: HotelService
  ) {
    this.titulo = "Listado de Hoteles";
    this.hotelsList = [];
    this.confirmed = null;
  }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    console.log('Listado de hoteles');
    this._hotelService.getHotels()
      .subscribe((result: any) => {
        this.hotelsList = result;

      },
        (error: any) => {
          console.log(<any>error);
        }
      );
  }

  cancelConfirm() {
    this.confirmed = null;
  }

  deleteConfirm(id: any) {
    this.confirmed = id;
  }

  onDeleteHotel(id: number) {
    this._hotelService.deteleHotel(id).subscribe(
      (result: any) => {
        this.getHotels();
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }
}