import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { TokenService } from '../services/token.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;

  constructor(  
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombreUsuario,this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
         console.log(err.error.message+ "error");
      }
    );
  }



}
