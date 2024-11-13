import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-hotel-add',
  templateUrl: '../views/hotel-add.component.html',
  providers: [HotelService]
})
export class HotelAddComponent {

  public titulo: String;
  public hotel: Hotel;
  public photoFile: any | undefined;
  public base64textString: String = '';

  constructor(
    private _hotelService: HotelService,
    private _router: Router
  ) {
    this.titulo = "Crear Hotel";
    this.hotel = new Hotel(0, '', '', 0, '');
  }

  onSubmit() {
    this.hotel.image = this.base64textString;
    this.saveHotel();
  }

  saveHotel() {
    this._hotelService.addHotel(this.hotel).subscribe(
      (response: any) => {
        this._router.navigate(['/hotels']);
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
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