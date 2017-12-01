import { Component, OnInit } from '@angular/core';
import {Nota} from '../../models/Nota';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NotasService} from '../../services/notas.service';
import {CategoriasService} from '../../services/categorias.service';
import {Categoria} from '../../models/Categoria';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

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

  constructor(private modalService: NgbModal, private notasService: NotasService, private categoriasService: CategoriasService, private authService: AuthService) {
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
    this.authService.checkAuth();

    this.notasService.getNotas().subscribe(
      notas => this.listaNotas = notas
    );

    this.categoriasService.getCategorias().subscribe(
      categorias => this.listaCategorias = categorias
    );
  }

  notaEliminada(nota: Nota) {
    const i = this.listaNotas.indexOf(nota);
    this.listaNotas.splice(i, 1);
  }
}
