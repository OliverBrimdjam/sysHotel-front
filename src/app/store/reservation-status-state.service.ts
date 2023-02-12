import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TReservationStatus } from '../types/TReservationStatus';
import { ReservationStatusService } from '../services/reservation-status.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationStatusStateService {
  private reservationStatusState = new BehaviorSubject<TReservationStatus[]>([]);

  constructor(private reservationStatusService: ReservationStatusService) {
    this.sync();
  }

  ngOnInit() {
  }

  getReservationStatusState() {
    return this.reservationStatusState.asObservable();
  }

  sync() {
    this.reservationStatusService.get().subscribe(reservationStatus => this.reservationStatusState.next(reservationStatus));
  }

  add(reservationStatus: TReservationStatus) {
    this.reservationStatusService.create(reservationStatus);
    this.sync();
  }

  remove(reservationStatusId: number) {
    this.reservationStatusService.delete(reservationStatusId);
    this.sync();
  }

  update(reservationStatus: TReservationStatus) {
    this.reservationStatusService.update(reservationStatus);
    this.sync();
  }
}
