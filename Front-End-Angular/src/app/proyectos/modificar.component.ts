import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from '../models/proyectos';
import { ProyectosService } from '../services/proyectos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ModificarComponent implements OnInit {

  proyectos : Proyectos = null;

  constructor(
    private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
      
      const id = this.activatedRoute.snapshot.params.id;
      this.proyectosService.detail(id).subscribe(
        data => {
          this.proyectos = data;
          console.log(data+"data");
        },
        err => {
          console.log(err);
          this.router.navigate(['/portfolio']);
        }
      );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.proyectosService.update(id, this.proyectos).subscribe(
      data => {
        console.log("guardado");
        this.router.navigate(['/portfolio']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
