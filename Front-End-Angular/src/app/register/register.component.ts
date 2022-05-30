import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { TokenService } from '../services/token.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;

  constructor(  
    private formBuilder:FormBuilder, 
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router) {
      this.form = this.formBuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(4)]] 
     })
     }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }
  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }

  onRegister(): void {
    this.nombreUsuario = this.email;
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
