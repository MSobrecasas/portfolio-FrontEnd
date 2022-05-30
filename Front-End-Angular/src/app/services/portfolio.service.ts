import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://127.0.0.1:8080/";

  constructor( private http:HttpClient) { }
/*
  public testService():Observable<any> {
    return this.http.get(this.url+"/datos/detail/1");
  }
*/
}
