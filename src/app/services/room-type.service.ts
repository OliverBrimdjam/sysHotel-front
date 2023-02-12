import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TRoomType } from '../types/TRoomType';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<TRoomType[]> {
    return this.http.get<TRoomType[]>(`${this.apiURL}/roomType`);
  }

  getById(id: number): Observable<TRoomType> {
    return this.http.get<TRoomType>(`${this.apiURL}/roomType/${id}`);
  }

  create(roomType: TRoomType): Observable<TRoomType> {
    return this.http.post<TRoomType>(`${this.apiURL}/roomType`, roomType);
  }

  update(roomType: TRoomType): Observable<TRoomType> {
    return this.http.put<TRoomType>(`${this.apiURL}/roomType`, roomType);
  }

  delete(id: number): Observable<TRoomType> {
    return this.http.delete<TRoomType>(`${this.apiURL}/roomType/${id}`);
  }
}
