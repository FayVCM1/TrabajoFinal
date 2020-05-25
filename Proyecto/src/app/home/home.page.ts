import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    Domicilios = new Array();
    newDomicilio = {
        repartidor: '',
        direccion: '',
        estado: 'pendiente',
        articulo: ''
    };

    constructor() {
        this.Domicilios = [];
    }

    agregarDomicilio() {
        this.Domicilios.push(this.newDomicilio);
        this.newDomicilio = {
            repartidor: '',
            direccion: '',
            estado: 'pendiente',
            articulo: ''
        };
    }

    cancelarDomicilio(domicilio) {
        let index = this.Domicilios.indexOf(domicilio);
        this.Domicilios.splice(index, 1);
    }

    cambiarEstadoDomicilio(domicilio, estado) {
        let index = this.Domicilios.indexOf(domicilio);
        this.Domicilios[index].estado = estado;

    }

}
