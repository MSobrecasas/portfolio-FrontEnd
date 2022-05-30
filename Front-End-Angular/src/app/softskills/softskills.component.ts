import { Component, OnInit } from '@angular/core';
import { SoftSkills } from '../models/soft-skills';
import { SoftSkillsService } from '../services/soft-skills.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css']
})
export class SoftskillsComponent implements OnInit {
  myData: SoftSkills[] = [];
  isLogged = false;
  roles: string[];
  isAdmin = false;

  constructor(private getData: SoftSkillsService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarDatos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
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

  cargarDatos(): void {
    this.getData.lista().subscribe(data => {
      this.myData = data;
    });
  }
}


