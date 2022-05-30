import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkills } from '../models/soft-skills';
import { SoftSkillsService } from '../services/soft-skills.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./softskills.component.css']
})
export class NuevoComponent implements OnInit {

  nombre = '';

  constructor(
    private softSkillService: SoftSkillsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    var mensaje;
    var opcion = confirm("Desea Guardar el registro?");
    if (opcion == true) {
      const softSkill = new SoftSkills(this.nombre);
      this.softSkillService.save(softSkill).subscribe(
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
