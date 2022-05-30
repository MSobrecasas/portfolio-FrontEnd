import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = "http://127.0.0.1:8080/auth/";

  constructor(private http: HttpClient) {
    console.log("AuthenticationService constructor FUNCIONANDO");
   }


  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(this.url + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.http.post<JwtDTO>(this.url + 'login', loginUsuario);    
  }
}
