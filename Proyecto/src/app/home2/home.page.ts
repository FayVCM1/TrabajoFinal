import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  Tareas = new Array();
  addTareas = {
    nombre: "",
    detalle: "",
    articulo: "",
    nivel: ""
  };

  visibleEditar: boolean = false;
  visibleActualizar: boolean = true;

  constructor( public navCtrl: NavController) {
    this.Tareas = [
      {
        nombre: 'Levantarse',
        detalle: 'Es hora de levantarte pinche peresos@',
        articulo: '8:00 AM',
        nivel: 'Leve'
      },
      {
        nombre: 'Desayunar',
        detalle: 'Es la comida mas importante del día',
        articulo: '6:12 AM',
        nivel: 'Prioridad'
      },
      {
        nombre: 'Almorzar',
        detalle: 'Te dará energias para el resto del día',
        articulo: '12:00 M',
        nivel: 'A tiempo'
      },
      {
        nombre: 'Cenar',
        detalle: 'Comer es importante, es tu tercer alimento',
        articulo: '7:00 PM',
        nivel: 'Prioridad'
      },
      {
        nombre: 'Dormir',
        detalle: 'Sigue acostandote tarde y veráz cuando llegues a viejo',
        articulo: '12:00 PM',
        nivel: 'Leve'
      },
    ];
   }
  
  guardarClick(tarea) {
    this.Tareas.push(tarea);
    this.addTareas = {
      nombre: "",
      detalle: "",
      articulo: "",
      nivel: ""
    };
  }
  
  actualizarClick(tarea) {
    this.update(tarea);
    this.addTareas = {
      nombre: tarea.nombre,
      detalle: tarea.detalle,
      articulo: tarea.date,
      nivel: tarea.nivel
    };
  }

  editarClick(tarea) {
    this.visibleEditar = false;
    this.visibleActualizar = true;
    this.addTareas = {
      nombre: tarea.nombre,
      detalle: tarea.detalle,
      articulo: tarea.date,
      nivel: tarea.nivel
    };
  }

  eliminarClick(tarea) {
    var i = this.Tareas.indexOf(tarea);
    this.Tareas.splice(i, 1);
  }

  eliminarTodoClick(tarea) {
    
  }

  update(tarea){
    var i = this.Tareas.indexOf(tarea);
    this.Tareas.splice(i, 1);
    this.Tareas.push(tarea);
    this.visibleActualizar = false;
    this.visibleEditar = true;
    
  }

}
