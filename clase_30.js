/**
 * 1. Importacion de modulos
 * 2. Declaracion de variables
 * 3. Declaracion de funciones
 * 4. Ejecucion del codigo
 */
import saludar , { PI, numeroRandom } from "./clase_30_constantes.js";
import {multiplicar, aritmeticaBasica} from "./clase_30_aritmetica.js";

console.log(multiplicar(PI, numeroRandom))
console.log(aritmeticaBasica.restar(PI, numeroRandom))
console.log(aritmeticaBasica.sumar(PI, numeroRandom))
saludar()
console.log("Archivo modulo, puramente javascript")
