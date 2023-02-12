import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TRoom } from '../types/TRoom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<TRoom[]> {
    return this.http.get<TRoom[]>(`${this.apiURL}/room`);
  }

  getById(id: number): Observable<TRoom> {
    return this.http.get<TRoom>(`${this.apiURL}/room/${id}`);
  }

  create(room: TRoom): Observable<TRoom> {
    return this.http.post<TRoom>(`${this.apiURL}/room`, room);
  }

  update(room: TRoom): Observable<TRoom> {
    return this.http.put<TRoom>(`${this.apiURL}/room`, room);
  }

  delete(id: number): Observable<TRoom> {
    return this.http.delete<TRoom>(`${this.apiURL}/room/${id}`);
  }
}
