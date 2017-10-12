import { Animal } from "./animal";

export class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    mover(distancia: number = 1) {
        console.log('Caminando y ronroneando...');
        // super.mover(distancia);
        console.log(`${this._nombre} se movio ${distancia}m.`);
    }
}