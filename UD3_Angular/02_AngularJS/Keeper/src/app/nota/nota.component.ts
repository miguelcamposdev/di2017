import {Component, Input, OnInit} from '@angular/core';
import {Nota} from '../models/Nota';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  @Input() nota: Nota;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  editar(modalToOpen: any) {
    this.modalService.open(modalToOpen);
  }
}
