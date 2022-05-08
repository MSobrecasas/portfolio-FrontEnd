import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myData: any;
  constructor(private getData: HeaderService) { }

  ngOnInit(): void {
    this.getData.getHeader().subscribe(data => {
      console.log(data);
      this.myData = data;
    });
  }

}
