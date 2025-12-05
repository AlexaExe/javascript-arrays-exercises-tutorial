function generateRandomArray()
{
	let auxArray = [];
	let randomLength = Math.floor(Math.random()*100);
	for(let i = 0; i < randomLength; i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
let myStupidArray = generateRandomArray();

let theLastOne = myStupidArray[myStupidArray.length - 1];
console.log(theLastOne);// Your code here

//<<<<<<NOTAS PARA EL NOTION>>>>>>
//como este array es dinámico, Elior me explicó el ejercicio de esta forma: 
//que si un array tiene "x" elementos el ultimo es el "x-1", me dio este tipo de ejemplo:
//let myArray = ["Elior", "te", "ama"]
				//  0      1      2
//ESTE ARRAY TIENE 3 ELEMENTOS, EL ULTIMO ESTÁ EN LA POSICION 2, QUE ES IGUAL A "3-1".
//POR ESO, "el indice final siempre es uno menos la cantidad total (X-1)"
//https://www.youtube.com/watch?v=d-CnlwX6x1A - video explicativo