export class HardSkills {
    id? : number;
    nombre : string;
    lenguaje : string;
    nivel : string;
    dato : number;

    constructor( nombre: string, lenguaje: string, nivel: string, dato: number) {
        this.nombre = nombre;
        this.lenguaje = lenguaje;
        this.nivel = nivel;
        this.dato = dato;
    }
}
