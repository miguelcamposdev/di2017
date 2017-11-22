"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var nombre = 'Miguel';
function edadUsuario(edad) {
    // TODO que aparezca un segundo parámetro con el nombre
    return +'tiene ' + edad + ' años';
}
console.log('Hola ' + nombre + ' ' + edadUsuario(20));
var a = new models_1.Alumno('Pepe', 'Garcia', 13123123, 21);
console.log(a.nombre + ' ' + edadUsuario(a.edad));
