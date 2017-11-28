import { Component, OnInit } from '@angular/core';
import {Nota} from '../models/Nota';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nota-listado',
  templateUrl: './nota-listado.component.html',
  styleUrls: ['./nota-listado.component.css']
})
export class NotaListadoComponent implements OnInit {
  listaNota: Array<Nota> = [
    {
      id: 1,
      titulo: 'Partido fútbol',
      descripcion: 'Jaime, Sosa, Amores',
      categoria: {
        id: 1,
        nombre: 'Hobbies',
        color: '#F2B22A'
      }
    },
    {
      id: 2,
      titulo: 'Deberes PMDM, DI',
      descripcion: 'Crear 20 proyectos Angular para practicar el Quizizz de mañana',
      categoria: {
        id: 2,
        nombre: 'Deberes',
        color: '#83D9FD'
      }
    }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  abrirModal(modalToOpen: any) {
    this.modalService.open(modalToOpen, {size: 'lg'});
  }
}
