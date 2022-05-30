import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from '../models/proyectos';
import { ProyectosService } from '../services/proyectos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class NuevoComponent implements OnInit {

  nombre = '';
  descripcion = '';
  url = '';
  imagen = '';

  constructor(
    private router: Router,
    private proyectosService: ProyectosService
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    var mensaje;
    var opcion = confirm("Desea Guardar el registro?");
    if (opcion == true) {
      const proyectos = new Proyectos(this.nombre, this.descripcion, this.url, this.imagen);
      this.proyectosService.save(proyectos).subscribe(
        data => {
          console.log("guardado");
          this.router.navigate(['/portfolio']);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      mensaje = "Guardar Cancelado";
    }


  }

}
