import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TReservationStatus } from '../types/TReservationStatus';

@Injectable({
  providedIn: 'root'
})
export class ReservationStatusService {
  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<TReservationStatus[]> {
    return this.http.get<TReservationStatus[]>(`${this.apiURL}/reservationStatus`);
  }

  getById(id: number): Observable<TReservationStatus> {
    return this.http.get<TReservationStatus>(`${this.apiURL}/reservationStatus/${id}`);
  }

  create(reservationStatus: TReservationStatus): Observable<TReservationStatus> {
    return this.http.post<TReservationStatus>(`${this.apiURL}/reservationStatus`, reservationStatus);
  }

  update(reservationStatus: TReservationStatus): Observable<TReservationStatus> {
    return this.http.put<TReservationStatus>(`${this.apiURL}/reservationStatus`, reservationStatus);
  }

  delete(id: number): Observable<TReservationStatus> {
    return this.http.delete<TReservationStatus>(`${this.apiURL}/reservationStatus/${id}`);
  }
}
