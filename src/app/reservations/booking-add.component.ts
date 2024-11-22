import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-add',
  templateUrl: '../views/reservations/booking-add.component.html'
})
export class BookingAddComponent {

  public title: String;

  constructor(){
    this.title="Paquetes de Viajes";
  }
}