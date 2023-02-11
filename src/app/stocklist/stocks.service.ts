import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  apiurl = 'https://retoolapi.dev/mRMWfA/data';
  constructor(public http: HttpClient) { }
  getStockPrice(): Observable<any>  {
    return this.http.get<any>(this.apiurl);
  }

  getItemById(id: number){
      return this.http.get(`${this.apiurl}/${id}`);
  }

  saveEntity(detail: any): Observable<any> {
    if(detail.id > 0){
      return this.http.put(`${this.apiurl}/${detail.id}`, detail);
    }
    return this.http.post(this.apiurl,detail);
  }

  deleteEntity(id:number) {
    return this.http.delete(`${this.apiurl}/${id}`);
  }

}
