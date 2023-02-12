import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReservationService } from '../services/reservation.service';
import { TReservation } from '../types/TReservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationStateService {
  private reservationState = new BehaviorSubject<TReservation[]>([]);

  constructor(private reservationService: ReservationService) {
    this.sync();
  }

  ngOnInit() {
  }

  getReservationState() {
    return this.reservationState.asObservable();
  }

  sync() {
    this.reservationService.get().subscribe(reservation => this.reservationState.next(reservation));
  }

  add(reservation: TReservation) {
    this.reservationService.create(reservation);
    this.sync();
  }

  remove(reservationId: number) {
    this.reservationService.delete(reservationId);
    this.sync();
  }

  update(reservation: TReservation) {
    this.reservationService.update(reservation);
    this.sync();
  }
}
