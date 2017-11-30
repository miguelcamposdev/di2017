import { Component, OnInit } from '@angular/core';
import {Categoria} from '../models/Categoria';
import {CategoriasService} from '../servicios/categorias.service';

@Component({
  selector: 'app-categoria-listado',
  templateUrl: './categoria-listado.component.html',
  styleUrls: ['./categoria-listado.component.css']
})
export class CategoriaListadoComponent implements OnInit {
  listaCategorias: Array<Categoria>;

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(
      categorias => this.listaCategorias = categorias
    );
  }

}


