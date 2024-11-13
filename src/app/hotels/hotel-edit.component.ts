import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: '../views/hotel-add.component.html',
  providers: [HotelService]
})
export class HotelEditComponent {

  public titulo: String;
  public hotel: Hotel;
  public photoFile: any | undefined;
  public base64textString: String = '';

  constructor(
    private _hotelService: HotelService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = "Editar Hotel";
    this.hotel = new Hotel(0, '', '', 0, '');
  }

  ngOnInit() {
    console.log('editar hotel:');
    this.getHotel();
  }

  getHotel() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log('id:' + id);
      this._hotelService.getHotel(id).subscribe(
        (result: any) => {
          this.hotel = result
        },
        (error: any) => {
          console.log(<any>error);
        }
      );
    });
  }

  onSubmit() {
    this.hotel.image = this.base64textString;
    this.updateHotel();
  }

  updateHotel() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._hotelService.updateHotel(this.hotel, id).subscribe(
        (result: any) => {
          this._router.navigate(['/hotels']);
        },
        (error: any) => {
          console.log(<any>error);
        }
      );
    });
  }

  onFileChange(fileInput: any) {
    let target = fileInput.target as HTMLInputElement;
    if (target.files !== null && target.files.length > 0) {
      this.photoFile = target.files[0];
      var reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.photoFile);
    }
  }

  handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }
}