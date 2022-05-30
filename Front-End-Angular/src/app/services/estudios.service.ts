import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudios } from '../models/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  url:string="http://127.0.0.1:8080/estudios/";

  constructor(private http:HttpClient) { }


  public lista(): Observable<Estudios[]> {
    return this.http.get<Estudios[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Estudios> {
    return this.http.get<Estudios>(this.url + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Estudios> {
    return this.http.get<Estudios>(this.url + `detailname/${nombre}`);
  }

  public save(estudios: Estudios): Observable<any> {
    return this.http.post<any>(this.url + 'create', estudios);
  }

  public update(id: number, estudios: Estudios): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, estudios);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
