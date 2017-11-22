import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  titulo = '';
  mostrarEditar = true;

  constructor() { }

  ngOnInit() {
  }

  setColor() {
    return this.titulo ? 'green' : 'red';
  }

}
