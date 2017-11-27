
import {Categoria} from './Categoria';

export class Nota {
  public id: number;
  public titulo: string;
  public descripcion: String;
  public categoria: Categoria;

  constructor(id: number, titulo: string, descripcion: String, categoria: Categoria) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.categoria = categoria;
  }
}
