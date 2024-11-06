import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public titulo: String;

  constructor(){
    this.titulo = "Página Principal";
  }

  ngOnInit(): void {
    console.log('Se ha cargado el home');
    
  }
}