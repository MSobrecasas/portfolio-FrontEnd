import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from '../models/estudios';
import { EstudiosService } from '../services/estudios.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./estudios.component.css']
})
export class NuevoComponent implements OnInit {

  nombre = '';
  institucion = '';
  nombreInstitucion = '';
  fecha = '';
  logo = '';

  constructor(
    private estudiosService: EstudiosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    var mensaje;
    var opcion = confirm("Desea Guardar el registro?");
    if (opcion == true) {
      const estudios = new Estudios(this.nombre, this.institucion, this.nombreInstitucion, this.fecha, this.logo);
      this.estudiosService.save(estudios).subscribe(
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
