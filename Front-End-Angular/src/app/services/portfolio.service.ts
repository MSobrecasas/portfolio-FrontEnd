import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor( private http:HttpClient) { }

  public testService():Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

}
