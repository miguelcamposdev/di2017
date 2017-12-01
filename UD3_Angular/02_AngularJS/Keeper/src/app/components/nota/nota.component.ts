import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Nota} from '../../models/Nota';
import {NotasService} from '../../services/notas.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input() nota: Nota;
  @Output() notaEliminadaClicked: EventEmitter<Nota> = new EventEmitter();

  notaSeleccionada: Nota = null;
  constructor(private modalService: NgbModal, private notasService: NotasService) { }

  ngOnInit() {
  }

  editar(nota: Nota, modal: any) {
    this.notaSeleccionada = nota;
    console.log('Click: ' + this.notaSeleccionada);
    this.modalService.open(modal);
  }

  eliminar(nota: Nota) {
    this.notaEliminadaClicked.emit(nota);
    this.notasService.deleteNota(nota.id).subscribe(
      resp => {
        // alert('Nota eliminada');
      },
      error => {
        alert('Error al eliminar la nota');
      });
  }
}
