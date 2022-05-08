import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private http:HttpClient) {}
   
    public getEstudios():Observable<any> {
      return this.http.get('./assets/data/estudios.json');
    }
}
