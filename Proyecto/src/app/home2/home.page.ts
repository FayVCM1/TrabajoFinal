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
    date: "",
    nivel: ""
  };

  visibleEditar: boolean = false;
  visibleActualizar: boolean = true;

  constructor( public navCtrl: NavController) {
    this.Tareas = [
      {
        nombre: 'Levantarse',
        detalle: 'Es hora de levantarte pinche peresos@',
        date: '8:00 AM',
        nivel: 'Leve'
      },
      {
        nombre: 'Desayunar',
        detalle: 'Es la comida mas importante del día',
        date: '6:12 AM',
        nivel: 'Prioridad'
      },
      {
        nombre: 'Almorzar',
        detalle: 'Te dará energias para el resto del día',
        date: '12:00 M',
        nivel: 'A tiempo'
      },
      {
        nombre: 'Cenar',
        detalle: 'Comer es importante, es tu tercer alimento',
        date: '7:00 PM',
        nivel: 'Prioridad'
      },
      {
        nombre: 'Dormir',
        detalle: 'Sigue acostandote tarde y veráz cuando llegues a viejo',
        date: '12:00 PM',
        nivel: 'Leve'
      },
    ];
   }
  
  guardarClick(tarea) {
    this.Tareas.push(tarea);
    this.addTareas = {
      nombre: "",
      detalle: "",
      date: "",
      nivel: ""
    };
  }
  
  actualizarClick(tarea) {
    this.update(tarea);
    this.addTareas = {
      nombre: tarea.nombre,
      detalle: tarea.detalle,
      date: tarea.date,
      nivel: tarea.nivel
    };
  }

  editarClick(tarea) {
    this.visibleEditar = false;
    this.visibleActualizar = true;
    this.addTareas = {
      nombre: tarea.nombre,
      detalle: tarea.detalle,
      date: tarea.date,
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
