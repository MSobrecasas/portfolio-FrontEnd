import { Component, OnInit } from '@angular/core';
import { Datos } from '../models/datos';
import { HeaderService } from '../services/header.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myData: Datos = null;
  isLogged = false;

  constructor(private getData: HeaderService, 
      private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getData.detail().subscribe(data => {
      this.myData = data;
    },
    error => {console.log(error);});
  }



   onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
