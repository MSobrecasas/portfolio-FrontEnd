export class Estudios {

    id? : number;
    nombre : string;
    institucion : string;
    nombreInstitucion : string;
    fecha : string;
    logo : string;

    constructor( nombre: string, institucion: string, nombreInstitucion: string, fecha: string, logo: string) {
        this.nombre = nombre;
        this.institucion = institucion;
        this.nombreInstitucion = nombreInstitucion;
        this.fecha = fecha;
        this.logo = logo;
    }
}
