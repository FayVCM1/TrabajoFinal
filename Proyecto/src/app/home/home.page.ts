import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Domicilios = new Array();

  constructor() {
    this.Domicilios = [
      {
        repartidor: 'Andres',
        direccion: 'Entregar en el cojunnto 43 manzana 4, apartamento 13',
        estado: 'entregado',
        date: 'jueves 8:00 AM'
      },
      {
        repartidor: 'Juan',
        direccion: 'Entregar en el cojunnto 43 manzana 4, apartamento 13',
        estado: 'entregado',
        date: 'viernes 6:12 AM'
      },
      {
        repartidor: 'Andres',
        direccion: 'Entregar en el cojunnto 43 manzana 4, apartamento 13',
        estado: 'entregado',
        date: 'hoy 12:00 M'
      },
      {
        repartidor: 'Alex',
        direccion: 'Entregar en el cojunnto 43 manzana 4, apartamento 13',
        estado: 'entregado',
        date: 'martes 7:00 PM'
      },
      {
        repartidor: 'Maria',
        direccion: 'Entregar en el cojunnto 43 manzana 4, apartamento 13',
        estado: 'entregado',
        date: 'hoy 12:00 PM'
      },
    ];
  }



}
