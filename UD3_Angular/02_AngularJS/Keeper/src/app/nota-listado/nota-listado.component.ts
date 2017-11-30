import { Component, OnInit } from '@angular/core';
import {Nota} from '../models/Nota';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotasService} from '../servicios/notas.service';

@Component({
  selector: 'app-nota-listado',
  templateUrl: './nota-listado.component.html',
  styleUrls: ['./nota-listado.component.css']
})
export class NotaListadoComponent implements OnInit {
  listaNota: Array<Nota>;

  constructor(private modalService: NgbModal, private notasService: NotasService) { }

  ngOnInit() {
    this.notasService.getNotas().subscribe(
      respuesta => this.listaNota = respuesta
    );
  }

  abrirModal(modalToOpen: any) {
    this.modalService.open(modalToOpen, {size: 'lg'});
  }

  guardarNota() {

  }
}
