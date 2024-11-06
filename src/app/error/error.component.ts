import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {

  public titulo: String;

  constructor(){
    this.titulo = "Error!! Página no encontrada";
  }

  ngOnInit(): void {
    console.log('Se ha cargado la página de error');
    
  }
}
