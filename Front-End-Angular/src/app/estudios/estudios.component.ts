import { Component, OnInit } from '@angular/core';
import { Estudios } from '../models/estudios';
import { EstudiosService } from '../services/estudios.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  myData: Estudios[] = [];
  isLogged = false;
  roles: string[];
  isAdmin = false;

  constructor(private getData: EstudiosService, private tokenService: TokenService) { }

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
