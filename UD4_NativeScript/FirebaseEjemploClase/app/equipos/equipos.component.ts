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
    this.equipos = new Array();
  }

  ngOnInit() {
    this.equiposService.getEquipos().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            const nuevoEquipo = new Equipo(
                doc.id,
                doc.data().nombre,
                doc.data().logotipo,
                doc.data().valoracion
            );

            this.equipos.push(nuevoEquipo);

            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    });
  }

}
