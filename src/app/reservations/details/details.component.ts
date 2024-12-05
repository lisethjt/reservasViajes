import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { HotelService } from '../../services/hotel.service'; 
import { Hotel } from '../../models/hotel';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [HotelService, FlightService,]
})
export class DetailsComponent {

  
  public hotel: Hotel;
  public flight: Flight;

  @Input() title: string = '';
  @Input() body: string = '';

  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  constructor( 
    private _hotelService: HotelService,
    private _flightService: FlightService
  ) { 
    this.hotel = new Hotel(0, '', '', 0, '');
    this.flight = new Flight(0, '', new Date(), 0, '');
  }


  ngOnInit(): void {
    let body = this.body.split('|')
    this.getHotel(body[0]);
    this.getFlight(body[1]);
  }

  closeMe() {
    this.closeMeEvent.emit();
  }

  confirm() {
    this.confirmEvent.emit();
  }
  
  ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }

  getHotel(id: any){
    this._hotelService.getHotel(id).subscribe(
      (result:any)=>{
          this.hotel =result;        
      },
      (error:any)=>{
        console.log(<any>error);
      }
    );
  }

  getFlight(id: any) {
    this._flightService.getFlight(id).subscribe(
      (result: any) => {
        this.flight = result.flight;
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }
 
}