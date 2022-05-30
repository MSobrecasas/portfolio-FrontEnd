export class Datos {
    id? : number;
    nombre: string;
    banner: string;
    imgPerfil: string;
    email: string;
    posicion: string;
    titulo: string;
    ubicacion: string;
    logo: string;
    linkedIn: string;
    github: string;

    constructor( nombre: string, banner: string, imgPerfil: string, email: string, posicion: string, titulo: string, ubicacion: string, logo: string, linkedIn: string, github: string) {
        this.nombre = nombre;
        this.banner = banner;
        this.imgPerfil = imgPerfil;
        this.email = email;
        this.posicion = posicion;
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.logo = logo;
        this.linkedIn = linkedIn;
        this.github = github;
    }
}
