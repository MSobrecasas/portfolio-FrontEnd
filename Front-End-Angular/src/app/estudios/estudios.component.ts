import { Component, OnInit } from '@angular/core';
import { EstudiosService } from '../services/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  myData: any;
  constructor(private getData: EstudiosService) { }

  ngOnInit(): void {
    this.getData.getEstudios().subscribe(data => {
      console.log(data);
      this.myData = data;
    });
  }

}
