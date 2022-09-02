// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}
devolverPrimerElemento([10 , 10 , 16 , 12]);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}
devolverUltimoElemento([97, 100, 80, 55, 72, 94]);


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return array.length;
}
obtenerLargoDelArray(["manzana","pera","banana"]);


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i = 0; i < array.length; i++)
  {
    array[i] += 1;
  }
  return array;
}
incrementarPorUno([3, 3, 3, 3]);


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array;
  array.push(elemento);
return array;
}
agregarItemAlFinalDelArray([23], 24)

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
    array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray([13, 14, 15], 12);

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var espacios = "";
  for(var i = 0; i < palabras.length; i++)
  {
    if(i === palabras.length - 1)
    {
      espacios = espacios + palabras[i];
      return espacios;
    }
    espacios = espacios + palabras[i] + " ";
  }
  return espacios;
}
dePalabrasAFrase(['Henry', 'JavaScript']);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
if(array[0] === elemento)
{return true;}return false;
}
arrayContiene([20, 22, 24], 20);

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
let suma = numeros.reduce((a, b)=> a + b, 0);
return suma;
}
agregarNumeros([10 , 5, 15]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
let suma = 0; 
for(let i = 0; i < resultadosTest.length; i++)
{
 suma = suma + resultadosTest[i];
}
return  promedio = suma / resultadosTest.length;
}
promedioResultadosTest([12 , 7, 10]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let resultado = numeros[0];
  for(var i = 0; i < numeros.length; i++)
  { 
    if(parseInt(numeros[i]) !== numeros[i])
    {}
    else if(resultado > numeros[i] )
    {
      continue;
    }
      else if(resultado < numeros[i])
      {
        resultado = numeros[i];
      }
  }
  return resultado;
}
numeroMasGrande([26, 18, 12, 32]);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 var valor = 1;
if(arguments.length === 0)
{
return 0;
}
  else if(arguments.length === 1)
   {
    return arguments[0];
    }
    for(var i = 0; i < arguments.length; i++)
     {
     valor = valor * arguments[i];
     }
return valor;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad = 0;
  for(var i = 0;i < arreglo.length;i++){
    if( arreglo[i] > 18){
      cantidad += 1;
    }
  }
  return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1||numeroDeDia === 7){
    return "Es fin de semana";
  }else if(numeroDeDia === 2||numeroDeDia === 3||numeroDeDia === 4||numeroDeDia === 5||numeroDeDia === 6){
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var boolean = n.toString()[0] === "9";
  
 return boolean;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var x = arreglo[0];
  for(var i = 0;i < arreglo.length; i++){
    if(arreglo[i] !== x)
      return false;
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];
  for(var i = 0;i < array.length; i++){
   var unMesDado = array[i];
    if(unMesDado === "Enero"||unMesDado === "Marzo"||unMesDado === "Noviembre"){
      meses.push(unMesDado);
    }
  }if(meses.length !== 3){
    return "No se encontraron los meses pedidos";
  }
  return meses;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var mayor =[];
 for(var i = 0;i < array.length; i++){
   if(array[i] > 100){
    mayor.push(array[i]);
   }
 }
return mayor;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var guardar = [];
var valor = numero;
var x = 1;

for(var i = 1;i <= 10; i++){
valor = valor + 2;
if(valor === x){break;}
x = x + 1;
guardar.push(valor);
}
if(valor === x) return "Se interrumpió la ejecución";
return guardar;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
var guardar = [];
var valor = numero;

  for(var i = 1;i <= 10; i++){
     if(i === 5){continue;}
      valor = valor + 2;  
     guardar.push(valor);
  }
return guardar;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
