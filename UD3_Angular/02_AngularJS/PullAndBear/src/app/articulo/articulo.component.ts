import {Component, Input, OnInit} from '@angular/core';
import {Articulo} from '../models/Articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input() articulo: Articulo;
  constructor() { }
  aumentar(art: Articulo) {
    art.cantidad = art.cantidad + 1;
  }

  disminuir(art: Articulo) {
    art.cantidad = art.cantidad - 1;
  }

  getTachado(art: Articulo) {
    if (art.rebajado) {
      return 'line-through';
    } else {
      return 'none';
    }
  }


  ngOnInit() {
  }

}
