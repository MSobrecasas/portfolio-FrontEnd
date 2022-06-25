import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="https://lit-spire-13994.herokuapp.com/";

  constructor( private http:HttpClient) { }
/*
  public testService():Observable<any> {
    return this.http.get(this.url+"/datos/detail/1");
  }
*/
}
