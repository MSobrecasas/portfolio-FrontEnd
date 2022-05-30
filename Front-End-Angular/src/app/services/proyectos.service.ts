import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url:string="http://127.0.0.1:8080/proyectos/";

  constructor(private http:HttpClient) { }


  public lista(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(this.url + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Proyectos> {
    return this.http.get<Proyectos>(this.url + `detailname/${nombre}`);
  }

  public save(estudios: Proyectos): Observable<any> {
    return this.http.post<any>(this.url + 'create', estudios);
  }

  public update(id: number, estudios: Proyectos): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, estudios);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
