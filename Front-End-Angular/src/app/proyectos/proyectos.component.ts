import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../models/proyectos';
import { ProyectosService } from '../services/proyectos.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  myData: Proyectos[] = [];
  isLogged = false;
  roles: string[];
  isAdmin = false; 

  constructor(
    private getData: ProyectosService,
    private tokenService: TokenService
  ) { }
   

  ngOnInit(): void {
    this.cargarDatos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarDatos(): void {
    this.getData.lista().subscribe(data => {
      this.myData = data;
    });
  }

  borrar(id: number) {
    var mensaje;
    var opcion = confirm("Desea eliminar el registro?");
    if (opcion == true) {
      this.getData.delete(id).subscribe(
        data => {

          this.cargarDatos();
        },
        err => {

        }
      );
    } else {
      mensaje = "Eliminar Cancelado";
    }
  }
}
