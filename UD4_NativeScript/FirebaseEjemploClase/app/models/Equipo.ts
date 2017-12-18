export class Equipo {
    id: string;
    nombre: string;
    logotipo: string;
    valoracion: number;

    constructor(id: string, nombre: string, logotipo: string, valoracion: number) {
        this.id = id;
        this.nombre = nombre;
        this.logotipo = logotipo;
        this.valoracion = valoracion;
    }
}