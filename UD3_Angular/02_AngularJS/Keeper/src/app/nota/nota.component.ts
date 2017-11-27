import {Component, Input, OnInit} from '@angular/core';
import {Nota} from '../models/Nota';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  @Input() nota: Nota;

  constructor() { }

  ngOnInit() {
  }

}
