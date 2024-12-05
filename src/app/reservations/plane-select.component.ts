import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../services/modal.service'; 
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FlightService } from '../services/flight.service';
import { Flight } from '../models/flight';



@Component({
  selector: 'app-plane-select',
  templateUrl: '../views/reservations/plane-select.component.html',
  providers: [FlightService]
})
export class PlaneSelectComponent {

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  public titulo: String;
  public flightList: Flight[];
 
  constructor(
    private _flightService: FlightService,    
    private _route: ActivatedRoute,
    private _modalService: ModalService,
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
        this.sub = this._modalService
        .openModal(this.entry, 'Error ' , "Estamos presentando inconvenientes. Intente más tarde")
        .subscribe((v: any) => {
          
        });
      }
    );
  }  

  redirigir(flightId: any){
    sessionStorage.setItem('flightId', flightId);
    this._router.navigate(['/app-booking']);
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
