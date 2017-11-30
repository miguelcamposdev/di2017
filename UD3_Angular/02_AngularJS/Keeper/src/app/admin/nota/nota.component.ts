import {Component, Input, OnInit} from '@angular/core';
import {Nota} from '../models/Nota';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input() nota: Nota;
  notaSeleccionada: Nota = null;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  editar(nota: Nota, modal: any) {
    this.notaSeleccionada = nota;
    console.log('Click: ' + this.notaSeleccionada);
    this.modalService.open(modal);
  }

  eliminar(nota: Nota) {
  }
}
