import { Component, OnInit } from '@angular/core';
import {NotaModel} from '../models/NotaModel';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  titulo = '';
  notas: Array<NotaModel> = [
    {id: 1, titulo: 'Nota 1', descripcion: 'dksjfhdkjf', editable: true, numero: 4},
    {id: 2, titulo: 'Nota 2', descripcion: 'dksjfhdkjf', editable: true, numero: 3},
  ];

  constructor() { }

  ngOnInit() {
  }

  setColor() {
    return this.titulo ? 'green' : 'red';
  }

  decrementarNumero(nota: NotaModel) {
    nota.numero = nota.numero - 1;
  }

  incrementarNumero(nota: NotaModel) {
    nota.numero = nota.numero + 1;
  }


}
