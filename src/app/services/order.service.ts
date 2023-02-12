import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TOrder } from '../types/TOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<TOrder[]> {
    return this.http.get<TOrder[]>(`${this.apiURL}/roomServiceOrder`);
  }

  getById(id: number): Observable<TOrder> {
    return this.http.get<TOrder>(`${this.apiURL}/roomServiceOrder/${id}`);
  }

  create(order: TOrder): Observable<TOrder> {
    return this.http.post<TOrder>(`${this.apiURL}/roomServiceOrder`, order);
  }

  update(order: TOrder): Observable<TOrder> {
    return this.http.put<TOrder>(`${this.apiURL}/roomServiceOrder`, order);
  }

  delete(id: number): Observable<TOrder> {
    return this.http.delete<TOrder>(`${this.apiURL}/roomServiceOrder/${id}`);
  }
}
