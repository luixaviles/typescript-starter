export abstract class Animal {
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
