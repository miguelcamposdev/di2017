import { Component, OnInit } from '@angular/core';
import {NotaModel} from '../models/NotaModel';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  titulo = '';
  // nota: NotaModel = new NotaModel(1, 'Lista compra', 'djkdf dsjhfgsd jfsdg fjhs ', false);
  notas: Array<NotaModel> = [
    {id: 1, titulo: 'Nota 1', descripcion: 'jhdsgfsdjhfghj', editable: false},
    {id: 2, titulo: 'Nota 2', descripcion: 'dskfjdsjf gsdjfhg sd', editable: true},
    {id: 3, titulo: 'Nota 3', descripcion: 'dsdsjkfhdskfj kfjdsjf gsdjfhg sd', editable: false}
  ];
  mostrarEditar = true;


  constructor() { }

  ngOnInit() {
  }

  setColor() {
    return this.titulo ? 'green' : 'red';
  }

  getEstiloTitulo(nota: NotaModel) {
    // return this.nota.titulo === 'Lista compra' ? 'green' : 'red';
    if (nota.id >= 5) {
      return 'green';
    } else {
      return 'red';
    }
  }

  incrementarNota(nota: NotaModel) {
    nota.id = nota.id + 1;
  }

}
