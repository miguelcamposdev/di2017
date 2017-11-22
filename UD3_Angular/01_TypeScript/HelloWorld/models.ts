export class Alumno {
    public nombre: String;
    public apellidos: String;
    public id: number;
    public edad: number;


    constructor(nombre: String, apellidos: String, id: number, edad: number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.id = id;
        this.edad = edad;
    }
}