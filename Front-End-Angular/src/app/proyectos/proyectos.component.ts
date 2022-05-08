import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private testS:PortfolioService) { }

  ngOnInit(): void {
    this.testS.testService().subscribe(data => {
    console.log(data);
    });
  }

}
