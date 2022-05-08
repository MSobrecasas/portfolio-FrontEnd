import { Component, OnInit } from '@angular/core';
import { SoftSkillsService } from '../services/soft-skills.service';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css']
})
export class SoftskillsComponent implements OnInit {
  myData: any;
  constructor(private getData: SoftSkillsService) { }

  ngOnInit(): void {
    this.getData.getSoft().subscribe(data => {
      console.log(data);
      this.myData = data;
    });
  }

}
