import { Component, OnInit } from '@angular/core';
import {Categoria} from '../models/Categoria';

@Component({
  selector: 'app-categoria-listado',
  templateUrl: './categoria-listado.component.html',
  styleUrls: ['./categoria-listado.component.css']
})
export class CategoriaListadoComponent implements OnInit {
  listaCategorias: Array<Categoria> = [
    {id: 1, nombre: 'Hobbies', color: '#F2B22A'},
    {id: 2, nombre: 'Deberes', color: '#83D9FD'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
