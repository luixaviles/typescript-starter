abstract class Animal {
    protected _nombre: string;

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre.toLocaleUpperCase();
    }

    set nombre(nombre: string) {
        if(nombre.length <= 3) {
            console.error('Nombre muy corto!');
            return;
        }

        this._nombre = nombre;
    }

    abstract mover(): void;
}

class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    mover(distancia: number = 1) {
        console.log('Caminando y ronroneando...');
        // super.mover(distancia);
        console.log(`${this._nombre} se movio ${distancia}m.`);
    }
}


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
