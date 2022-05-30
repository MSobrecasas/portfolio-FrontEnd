import { Component, OnInit } from '@angular/core';
import { EstudiosService } from '../services/estudios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from '../models/estudios';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./estudios.component.css']
})
export class ModificarComponent implements OnInit {

  estudios : Estudios = null;

  constructor(
    private estudiosService: EstudiosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
      
      const id = this.activatedRoute.snapshot.params.id;
      this.estudiosService.detail(id).subscribe(
        data => {
          this.estudios = data;
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
    this.estudiosService.update(id, this.estudios).subscribe(
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
