export class NuevoUsuario {

    nombreUsuario: string;
    password: string;
    authorities: string[];
    
    constructor(nombreUsuario: string, password: string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
