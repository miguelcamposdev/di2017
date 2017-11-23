import { Component, OnInit } from '@angular/core';
import {Articulo} from '../models/Articulo';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent implements OnInit {
  listaProductos: Array<Articulo> = [
    {ref: 1, nombre: 'Zapato', cantidad: 1, color: 'Negro', importe: 50,
      importeRebajado: 45, rebajado: false, talla: '43', foto: 'https://xtistore.es/media/catalog/product/6/4/64009_BUR_01.JPG'},
    {ref: 2, nombre: 'Zapatillas', cantidad: 1, color: 'Negro', importe: 45,
      importeRebajado: 29.95, rebajado: true, talla: '42', foto: 'https://xtistore.es/media/catalog/product/6/4/64009_BUR_01.JPG'},
    {ref: 3, nombre: 'Vestido', cantidad: 1, color: 'Rojo', importe: 50,
      importeRebajado: 30, rebajado: false, talla: 'XXL', foto: 'https://xtistore.es/media/catalog/product/6/4/64009_BUR_01.JPG'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
