import { Component, OnInit } from '@angular/core';
import { SoftSkillsService } from '../services/soft-skills.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkills } from '../models/soft-skills';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./softskills.component.css']
})
export class ModificarComponent implements OnInit {

  softSkill: SoftSkills = null;
  constructor(private softSkilsService: SoftSkillsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;
    this.softSkilsService.detail(id).subscribe(
      data => {
        this.softSkill = data;
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
    this.softSkilsService.update(id, this.softSkill).subscribe(
      data => {
        console.log("guardado");
        //this.toastr.success('Producto Actualizado', 'OK', {
        //  timeOut: 3000, positionClass: 'toast-top-center'
       // });
        this.router.navigate(['/portfolio']);
      },
      err => {
        console.log(err);
        //this.toastr.error(err.error.mensaje, 'Fail', {
       //   timeOut: 3000,  positionClass: 'toast-top-center',
       // });
        // this.router.navigate(['/']);
      }
    );
  }
}
