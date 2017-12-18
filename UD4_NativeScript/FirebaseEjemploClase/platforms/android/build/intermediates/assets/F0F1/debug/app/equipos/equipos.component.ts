import { Component, OnInit } from '@angular/core';
import {Equipo} from '../models/Equipo';
import {EquiposService} from '../services/equipos.service';

@Component({
  moduleId: module.id,
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  equipos: Array<Equipo>;

  constructor(private equiposService: EquiposService) {

  }

  ngOnInit() {
    this.equiposService.getEquipos();
  }

}
