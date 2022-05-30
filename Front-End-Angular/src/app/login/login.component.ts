import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { AuthenticationService } from '../services/authentication.service';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  email: string;
  password: string;
  roles: string[] = [];
  errMsj: string;

  constructor( 
    private formBuilder:FormBuilder, 
    private authenticacionService:AuthenticationService, 
    private ruta:Router,
    
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router,
   ){

    this.form = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4)]] 
   })

   
   
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }


  onLogin(): void {
    this.nombreUsuario = this.email;
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/portfolio']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.isLoginFail = true;
      }
    );
  }

}
