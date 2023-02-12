import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TGuest } from '../types/TGuest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  apiURL = environment.apiURL;


  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<TGuest[]> {
    return this.http.get<TGuest[]>(`${this.apiURL}/guests`);
  }

  getById(id: number): Observable<TGuest> {
    return this.http.get<TGuest>(`${this.apiURL}/guests/${id}`);
  }

  create(guest: TGuest): Observable<TGuest> {
    return this.http.post<TGuest>(`${this.apiURL}/guests`, guest);
  }

  update(guest: TGuest): Observable<TGuest> {
    return this.http.put<TGuest>(`${this.apiURL}/guests`, guest);
  }

  delete(id: number): Observable<TGuest> {
    return this.http.delete<TGuest>(`${this.apiURL}/guests/${id}`);
  }
}
