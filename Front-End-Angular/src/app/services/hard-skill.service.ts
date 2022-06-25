import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HardSkills } from '../models/hard-skills';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {

  url:string="https://lit-spire-13994.herokuapp.com/hardskills/";

  constructor(private http:HttpClient) { }


  public lista(): Observable<HardSkills[]> {
    return this.http.get<HardSkills[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<HardSkills> {
    return this.http.get<HardSkills>(this.url + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<HardSkills> {
    return this.http.get<HardSkills>(this.url + `detailname/${nombre}`);
  }

  public save(hardSkills: HardSkills): Observable<any> {
    return this.http.post<any>(this.url + 'create', hardSkills);
  }

  public update(id: number, hardSkills: HardSkills): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, hardSkills);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
