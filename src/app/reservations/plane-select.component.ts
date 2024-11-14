import { Component } from '@angular/core';

@Component({
  selector: 'app-plane-select',
  templateUrl: '../views/reservations/plane-select.component.html'
})
export class PlaneSelectComponent {

  public titulo: String;

  constructor(){
    this.titulo = "Vuelos";
  }
}
