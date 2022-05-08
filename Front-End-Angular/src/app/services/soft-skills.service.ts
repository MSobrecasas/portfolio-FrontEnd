import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  constructor(private http:HttpClient) { }

  public getSoft():Observable<any> {
    return this.http.get('./assets/data/softSkills.json');
  }
}
