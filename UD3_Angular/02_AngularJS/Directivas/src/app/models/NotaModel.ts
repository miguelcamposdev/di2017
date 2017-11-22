export class NotaModel {
  public id: number;
  public titulo: string;
  public descripcion: string;
  public editable: boolean;
  public numero: number;


  constructor(id: number, titulo: string, descripcion: string, editable: boolean, numero: number) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.editable = editable;
    this.numero = numero;
  }
}
