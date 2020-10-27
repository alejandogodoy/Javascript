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