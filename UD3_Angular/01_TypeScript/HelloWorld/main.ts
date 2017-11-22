import {Alumno} from './models';

let nombre: String = 'Miguel';

function edadUsuario(edad: number): String {
    // TODO que aparezca un segundo parámetro con el nombre
    return +'tiene '+edad + ' años';
}

console.log('Hola '+nombre+' '+edadUsuario(20));

let a: Alumno = new Alumno('Pepe','Garcia',13123123,21);

console.log(a.nombre+' '+edadUsuario(a.edad));