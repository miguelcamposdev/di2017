import { Component, OnInit } from '@angular/core';
import {Nota} from '../models/Nota';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NotasService} from '../servicios/notas.service';
import {CategoriasService} from '../servicios/categorias.service';
import {Categoria} from '../models/Categoria';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './nota-listado.component.html',
  styleUrls: ['./nota-listado.component.css']
})
export class NotaListadoComponent implements OnInit {
  nuevaNotaTitulo = '';
  nuevaNotaDescripcion = '';
  idCategoria = '';
  modalRef: NgbModalRef;

  listaNotas: Nota[];
  listaCategorias: Categoria[];
  control: FormControl = new FormControl('value', Validators.minLength(2));

  constructor(private modalService: NgbModal, private notasService: NotasService, private categoriasService: CategoriasService) {
  }

  mostrarModal(modalContent: any) {
    this.modalRef = this.modalService.open(modalContent, {size: 'lg'});
  }

  guardarNota() {
    this.modalRef.dismiss();
    this.notasService.addNota(this.nuevaNotaTitulo, this.nuevaNotaDescripcion, Number.parseInt(this.idCategoria))
      .subscribe(nota => this.listaNotas.push(nota));
  }

  ngOnInit() {
    this.notasService.getNotas().subscribe(
      notas => this.listaNotas = notas
    );

    this.categoriasService.getCategorias().subscribe(
      categorias => this.listaCategorias = categorias
    );
  }

}
