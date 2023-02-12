import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TReservation } from '../types/TReservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<TReservation[]> {
    return this.http.get<TReservation[]>(`${this.apiURL}/reservation`);
  }

  getById(id: number): Observable<TReservation> {
    return this.http.get<TReservation>(`${this.apiURL}/reservation/${id}`);
  }

  create(reservation: TReservation): Observable<TReservation> {
    return this.http.post<TReservation>(`${this.apiURL}/reservation`, reservation);
  }

  update(reservation: TReservation): Observable<TReservation> {
    return this.http.put<TReservation>(`${this.apiURL}/reservation`, reservation);
  }

  delete(id: number): Observable<TReservation> {
    return this.http.delete<TReservation>(`${this.apiURL}/reservation/${id}`);
  }
}
