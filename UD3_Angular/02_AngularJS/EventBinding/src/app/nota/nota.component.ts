import { Component, OnInit } from '@angular/core';
import {Nota} from '../modelos/notaModel';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  notaEjemplo: Nota = new Nota(1, 'Lista compra', 'Leche, pan, huevos', '#FF0000');
  totalNotas = 10;
  encabezado = 'Encabezado original';
  constructor() { }

  getTotalNotas() {
    return this.totalNotas;
  }
  cambiarEncabezado() {
    this.encabezado = 'Encabezado cambiado';
  }

  ngOnInit() {
  }

}
