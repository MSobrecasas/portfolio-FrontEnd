import { Component, OnInit } from '@angular/core';
import { HardSkillService } from '../services/hard-skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkills } from '../models/hard-skills';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class ModificarComponent implements OnInit {
  
  hardSkills: HardSkills = null;

  constructor(
    private hardSkillService: HardSkillService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
      this.hardSkillService.detail(id).subscribe(
        data => {
          this.hardSkills = data;
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
    this.hardSkillService.update(id, this.hardSkills).subscribe(
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
