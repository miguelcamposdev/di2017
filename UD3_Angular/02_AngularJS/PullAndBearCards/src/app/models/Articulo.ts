export class Articulo {
  public ref: number;
  public nombre: String;
  public color: String;
  public talla: String;
  public cantidad: number;
  public importe: number;
  public importeRebajado: number;
  public rebajado: boolean;
  public foto: string;
  constructor(ref: number, nombre: String, color: String, talla: String, cantidad: number, importe: number, importeRebajado: number, rebajado: boolean, foto: string) {
    this.ref = ref;
    this.nombre = nombre;
    this.color = color;
    this.talla = talla;
    this.cantidad = cantidad;
    this.importe = importe;
    this.importeRebajado = importeRebajado;
    this.rebajado = rebajado;
    this.foto = foto;
  }
}
