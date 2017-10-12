// import { Animal } from "./model/animal";
// import { Gato } from "./model/gato";

import {Animal, Gato, PI, helloWorldTS} from './model';

console.log('PI constant: ', PI);
helloWorldTS();

let helloWorld:string = 'Hello TypeScript world';
let numberContainer:number = 2;
console.log(helloWorld);


// Instancia, objeto de clase
const animal1 = new Gato('Misifu');
animal1.mover();
animal1.mover(5);

// const gato = new Gato('Tom');
const gato: Animal = new Gato('Tomas');
// Polimorfismo
gato.mover();
gato.nombre = 'Tom'; //set nombre()
console.log('Nombre', gato.nombre); // get nombre()

(<Gato>gato).mover(2);
(gato as Gato).mover(3);
