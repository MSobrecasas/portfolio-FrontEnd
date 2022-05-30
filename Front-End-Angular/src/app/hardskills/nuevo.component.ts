import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkills } from '../models/hard-skills';
import { HardSkillService } from '../services/hard-skill.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class NuevoComponent implements OnInit {

  nombre = '';
  lenguaje = '';
  nivel = '';
  dato = 0;

  constructor(
    private hardSkillService: HardSkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    var mensaje;
    var opcion = confirm("Desea Guardar el registro?");
    if (opcion == true) {
      const hardskills = new HardSkills(this.nombre, this.lenguaje, this.nivel, this.dato);
      this.hardSkillService.save(hardskills).subscribe(
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
