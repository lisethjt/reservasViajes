import { Component } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: '../views/hotels-list.component.html',
  providers: [HotelService]
})
export class HotelsListComponent {

  public titulo: String;
  public hotelsList: Hotel[];

  constructor(
    private _hotelService: HotelService
  ) {
    this.titulo = "Listado de Hoteles";
    this.hotelsList = [];  
  }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(){    
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
}
