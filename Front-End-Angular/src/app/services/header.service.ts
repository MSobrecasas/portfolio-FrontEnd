import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datos } from '../models/datos';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  url:string="https://lit-spire-13994.herokuapp.com/datos/";
  constructor(private http:HttpClient) { }

  public lista(): Observable<Datos[]> {
    return this.http.get<Datos[]>(this.url + 'lista');
  }

  public detail(): Observable<Datos> {
    return this.http.get<Datos>(this.url + `detail/1`);
  }

  public detailName(nombre: string): Observable<Datos> {
    return this.http.get<Datos>(this.url + `detailname/${nombre}`);
  }

  public save(Datos: Datos): Observable<any> {
    return this.http.post<any>(this.url + 'create', Datos);
  }

  public update(id: number, Datos: Datos): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, Datos);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
