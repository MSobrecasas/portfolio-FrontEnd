import { Component, OnInit } from '@angular/core';
import { Chart } from 'Chart.js';
import { HardSkills } from '../models/hard-skills';
import { HardSkillService } from '../services/hard-skill.service';
import { TokenService } from '../services/token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-hardskills',
    templateUrl: './hardskills.component.html',
    styleUrls: ['./hardskills.component.css']
})
export class HardskillsComponent implements OnInit {
    myData: HardSkills[] = [];
    isLogged = false;
    roles: string[];
    isAdmin = false;

    constructor(
        private getData: HardSkillService, 
        private tokenService: TokenService,
        private router: Router) { }

    ngOnInit() {
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
            this.graficosDinamico();
        });
    }
    graficosDinamico(): void {
        this.myData.forEach(e => {
            var row1 = document.createElement("div");
            row1.className = "row";
            var h3 = document.createElement("h3");
            h3.className = "texto1";
            h3.textContent = e.lenguaje;
            row1.appendChild(h3);

            var row2 = document.createElement("div");
            row2.className = "row";
            var newCanvas = document.createElement("canvas");
            newCanvas.id = e.nombre;
            row2.appendChild(newCanvas);

            var row3 = document.createElement("div");
            row3.className = "row";
            var h5 = document.createElement("h5");
            h5.className = "texto2";
            h5.textContent = e.nivel;
            row3.appendChild(h5);

            if (this.isAdmin == true) {
                var row4 = document.createElement("div");
                row4.className = "row justify-content-center";

                var button = document.createElement("button");
                button.className = "btn btn-outline-dark";
                button.style.width="50px";
                var icon = document.createElement("i");
                icon.className = "fas fa-edit";
                button.addEventListener("click", () => {
                    this.router.navigate(['/modificarh/'.concat(e.id.toString())]);
                },false);
                button.appendChild(icon);
                

                var button1 = document.createElement("button");
                button1.className = "btn btn-outline-danger";
                button1.style.width="50px";
                button1.style.marginLeft="5px";
                var icon1 = document.createElement("i");
                icon1.className = "fas fa-trash-alt";
                button1.addEventListener("click", () =>{
                this.borrar(e.id)},false);
                button1.appendChild(icon1);

                row4.appendChild(button);
                row4.appendChild(button1);
            }
           


            var newDiv = document.createElement("div");
            newDiv.className = "col-md-3 charts divColor";
            newDiv.appendChild(row1);
            newDiv.appendChild(row2);
            newDiv.appendChild(row3);
            if (this.isAdmin == true) {
               newDiv.appendChild(row4);
            }

            var currentDiv = document.getElementById("graph");
            currentDiv.appendChild(newDiv);

            var charts = new Chart(e.nombre, {
                type: 'doughnut',
                data: {
                    labels: [],
                    datasets: [{
                        label: '',
                        data: [100 - e.dato, e.dato],
                        backgroundColor: [
                            'rgba(166, 196, 169, 0.01)',
                            'rgba(17, 237, 37, 0.5)',

                        ],
                        borderColor: [
                            'rgba(166, 196, 169, 0.01)',
                            'rgba(17, 237, 37, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
            });

        });
    }


    borrar(id: number) {
        var mensaje;
        var opcion = confirm("Desea eliminar el registro?");
        if (opcion == true) {
          this.getData.delete(id).subscribe(
            data => {
              this.cargarDatos();
              location.reload();
            },
            err => {
              console.log(err);
            }
          );
        } else {
          mensaje = "Eliminar Cancelado";
        }
      }
}
