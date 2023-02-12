import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TRoomStatus } from '../types/TRoomStatus';

@Injectable({
  providedIn: 'root'
})
export class RoomStatusService {
  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<TRoomStatus[]> {
    return this.http.get<TRoomStatus[]>(`${this.apiURL}/roomStatus`);
  }

  getById(id: number): Observable<TRoomStatus> {
    return this.http.get<TRoomStatus>(`${this.apiURL}/roomStatus/${id}`);
  }

  create(roomStatus: TRoomStatus): Observable<TRoomStatus> {
    return this.http.post<TRoomStatus>(`${this.apiURL}/roomStatus`, roomStatus);
  }

  update(roomStatus: TRoomStatus): Observable<TRoomStatus> {
    return this.http.put<TRoomStatus>(`${this.apiURL}/roomStatus`, roomStatus);
  }

  delete(id: number): Observable<TRoomStatus> {
    return this.http.delete<TRoomStatus>(`${this.apiURL}/roomStatus/${id}`);
  }
}
