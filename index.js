// VARIABLES Y OPERADORES

/* EJERCICIO a
var a = 2;
var b = 4;
console.log (a + b);
*/

/*EJERCICIO b
var myVar = "Hello world ";
var myVar2 = "how are you?";
alert ( myVar += myVar2)
*/

/*EJERCICIO c
var myStr = "Hello";
var myStr2 = "World";
console.log (myStr.length + myStr2.length) 
*/

// STRINGS 

/* EJERCICIO a
var x = "hello world";
console.log (x.toUpperCase ());
*/

/* EJERCICIO b
var str = "Hello Word";
var res = str.substring(0, 5);
console.log (res);
*/

/* EJERCICIO c
var str = "Hello World"
var res = str.substring (8, 11)
console.log (res);
*/

/*EJERCICIO d
var str = "hello world";
var res = str.substring (0, 1).toUpperCase() + str.substring (1, 11).toLowerCase()
console.log (res);
*/

/* EJERCICIO e
var str = " hello world"
var res = str.indexOf(" ");
console.log (res);
*/

/* EJERCICIO f
var str = "certificates statements"
var res = str.substring (0, 1).toUpperCase()+ str.substring (1, 11).toLowerCase() + str.substring(13, 14).toUpperCase() + str.substring (14, 23).toLowerCase()
console.log (res);
*/

// ARRAYS

/* EJERCICIO a
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[5], meses[11])
*/

/*EJERCICIO b
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (meses.sort())
*/

/* EJERCICIO c
var list = ["Banana", "Apple", "Orange"];
list.push ("Mango");
list.unshift("Grape");
alert (list)
*/

/* EJERCICIO d
var list = ["Banana", "Apple", "Orange"];
list.shift()
list.pop ()
alert (list)
*/

/* EJERCICIO e
var myArray = ["first", "Second", "Third"]
myArray.reverse()
alert (myArray)
*/
/*EJERCICIO f
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var order = meses.join(" - ")
alert (order)
*/
/*EJERCICIO g
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copy = meses.slice (4, 11)
alert (copy)
*/

// If - Else

/*EJERCICIO a
Math.random()
if (Math.random()>= 0,5) {
    alert ("Greater than 0,5")
}else {
    alert ("Lower than 0,5")
}
*/

/* EJERCICIO b
var Age = 28;

if (Age < 2) {
    alert ("Bebé");
} else if (Age < 2) && (Age < 12) {
    alert ("Nino");
} else if (Age < 13) &&(Age < 19) {
    alert ("Adolecente");
} else if (Age < 20) && (Age < 30){
    alert ("Joven")
} else if (Age < 31) && (Age < 60) {
    alert ("adulto")
} else if  (Age < 61) && (Age < 75) {
    alert ("Adulto Mayor")
} else  if (Age == 75) {
    alert ("Anciano")
}
*/

// For

/*EJERCICIO a

var myArray = ["Red", "Blue", "Green", "White", "Black"];
for (var index = 0; index < myArray.length; index++) {
    alert (myArray[index])
}
*/

/*EJERCICIO b
var myArray = ["red", "blue", "green", "white", "black"];

for (var index = 0; index < myArray.length; index++) {
    myArray[index] = myArray[index].charAt(0).toUpperCase() + myArray[index].slice(1);
    alert   (myArray[index])
}
*/

/* EJERCICIO c
var sentence = "";
var myArray = ["Red", "Blue", "Green", "White", "Black"];
for (var i = 0; i < myArray.length; i++) {
    sentence = myArray
    alert (sentence[i])
}
*/

/*
var array = [];
for (index = 0; index < 10; index += 1) {

    array[index] = [];

}
console.log (array)
*/
// Funciones

/*EJERCICIO a
function miSuma(a,b) {
    console.log(a+b);
    }
    miSuma(7,9);
    */

   /* EJERCICIO b
function miSuma (a, b) {
    if (isNaN(a)) {
      alert ("El primer valor está mal");
      return NaN;
    } else if (isNaN(b)) {
        alert ("El segundo valor es incorrecto");
        return NaN;
    }
    return a + b;
}
console.log(miSuma(4.5
*/

/* EJERCICIO c
function validated (param1){
    if (Number.isInteger(param1)){
        return true;
    }
    return false;
}
console.log(validated(4.55)
*/
/*EJERCICIO d
function suma (num1, num2) {
    if (isNaN(num1)) {
      alert ("El primer valor es incorrecto");
      return NaN;
    } else if (isNaN(num2)) {
        alert ("El segundo valor es incorrecto");
        return NaN;
    }
    if (validate (num1 + num2)) {
        return num1 + num2;
    } 
    alert("Algunos numeros no son enteros " + Math.round(num1 + num2));
    return Math.round(num1 + num2)
}
console.log(suma(10,3.5)))
*/

/*EJERCICIO e

function validateNumber (num1) {
    if (isNaN(num1)) {
      alert ("No es un número");
      return NaN;
    }
    return num1;
}
function suma (num1, num2){
     return validateNumber(num1) + validateNumber(num2);
}
console.log(suma(6,"sdfdsf"))
*/