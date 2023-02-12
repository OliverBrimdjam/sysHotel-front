import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TRoomServiceStatus } from '../types/TRoomServiceStatus';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceStatusService {
  apiURL = environment.apiURL;

  constructor(
    public http: HttpClient
  ) { }

  get(): Observable<TRoomServiceStatus[]> {
    return this.http.get<TRoomServiceStatus[]>(`${this.apiURL}/roomServiceStatus`);
  }

  getById(id: number): Observable<TRoomServiceStatus> {
    return this.http.get<TRoomServiceStatus>(`${this.apiURL}/roomServiceStatus/${id}`);
  }

  create(roomServiceStatus: TRoomServiceStatus): Observable<TRoomServiceStatus> {
    return this.http.post<TRoomServiceStatus>(`${this.apiURL}/roomServiceStatus`, roomServiceStatus);
  }

  update(roomServiceStatus: TRoomServiceStatus): Observable<TRoomServiceStatus> {
    return this.http.put<TRoomServiceStatus>(`${this.apiURL}/roomServiceStatus`, roomServiceStatus);
  }

  delete(id: number): Observable<TRoomServiceStatus> {
    return this.http.delete<TRoomServiceStatus>(`${this.apiURL}/roomServiceStatus/${id}`);
  }
}

