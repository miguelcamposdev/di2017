export class NotaModel {
  public id: number;
  public titulo: string;
  public descripcion: string;
  public editable: boolean;


  constructor(id: number, titulo: string, descripcion: string, editable: boolean) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.editable = editable;
  }
}
