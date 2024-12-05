import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../services/modal.service'; 
import { DomSanitizer } from '@angular/platform-browser';

import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';


@Component({
  selector: 'app-hotel-select',
  templateUrl: '../views/reservations/hotel-select.component.html',
  providers: [HotelService]
})
export class HotelSelectComponent {

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  public titulo: String;
  public hotelsList: Hotel[];
 
  constructor(
    private _hotelService: HotelService,
    private _modalService: ModalService,
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
        this.sub = this._modalService
        .openModal(this.entry, 'Error ' , "Estamos presentando inconvenientes. Intente más tarde")
        .subscribe((v: any) => {
          
        });
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}