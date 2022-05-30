import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoftSkills } from '../models/soft-skills';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  url:string="http://127.0.0.1:8080/softskills/";

  constructor(private http:HttpClient) { }

  public lista(): Observable<SoftSkills[]> {
    return this.http.get<SoftSkills[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<SoftSkills> {
    return this.http.get<SoftSkills>(this.url + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<SoftSkills> {
    return this.http.get<SoftSkills>(this.url + `detailname/${nombre}`);
  }

  public save(softSkills: SoftSkills): Observable<any> {
    return this.http.post<any>(this.url + 'create', softSkills);
  }

  public update(id: number, softSkills: SoftSkills): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, softSkills);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
