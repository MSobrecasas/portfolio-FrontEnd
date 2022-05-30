export class Proyectos {

    id? : number;
    nombre : string;
    descripcion : string;
    url : string;
    imagen : string;

  constructor( nombre: string, descripcion: string, url: string, imagen: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url = url;
        this.imagen = imagen;
    }
    
}