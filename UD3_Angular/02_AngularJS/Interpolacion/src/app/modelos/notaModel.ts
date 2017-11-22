export class Nota {
  public id: number;
  public titulo: String;
  public descripcion: String;
  public color: String;

  constructor(id: number, titulo: String, descripcion: String, color: String) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.color = color;
  }
}
