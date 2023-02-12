import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TRoomService } from '../types/TRoomService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<TRoomService[]> {
    return this.http.get<TRoomService[]>(`${this.apiURL}/roomService`);
  }

  getById(id: number): Observable<TRoomService> {
    return this.http.get<TRoomService>(`${this.apiURL}/roomService/${id}`);
  }

  create(roomService: TRoomService): Observable<TRoomService> {
    return this.http.post<TRoomService>(`${this.apiURL}/roomService`, roomService);
  }

  update(roomService: TRoomService): Observable<TRoomService> {
    return this.http.put<TRoomService>(`${this.apiURL}/roomService`, roomService);
  }

  delete(id: number): Observable<TRoomService> {
    return this.http.delete<TRoomService>(`${this.apiURL}/roomService/${id}`);
  }
}

