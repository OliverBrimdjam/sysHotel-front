import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TRoomHistory } from '../types/TRoomHistory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomHistoryService {
  apiURL = environment.apiURL;

  constructor(
    public http: HttpClient
  ) { }

  get(): Observable<TRoomHistory[]> {
    return this.http.get<TRoomHistory[]>(`${this.apiURL}/roomHistory`);
  }

  getByRoomId(id: number): Observable<TRoomHistory[]> {
    return this.http.get<TRoomHistory[]>(`${this.apiURL}/roomHistory/room/${id}`);
  }
}
