import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FlightService } from '../services/flight.service';
import { Flight } from '../models/flight';



@Component({
  selector: 'app-plane-select',
  templateUrl: '../views/reservations/plane-select.component.html',
  providers: [FlightService]
})
export class PlaneSelectComponent {

  public titulo: String;
  public flightList: Flight[];
 
  constructor(
    private _flightService: FlightService,    
    private _route: ActivatedRoute,
    private _router: Router   
  ){
    this.titulo = "Vuelos";
    this.flightList = [];
  }

  ngOnInit(): void {
    console.log("Vuelos");
    this._route.params.forEach((params:Params) => {
      let hotelId = params['hotelId'];
      sessionStorage.setItem('hotelId', hotelId);
    });

    this.getFlightList();
  }

  getFlightList(){
    this._flightService.getFlightList().subscribe(
      (result: any) => {
        this.flightList = result.flightList;    
        console.log("::" + result.message.code);
       },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }  

  redirigir(flightId: any){
    sessionStorage.setItem('flightId', flightId);
    this._router.navigate(['/app-booking']);
  }
}
