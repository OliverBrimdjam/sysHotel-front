import { Injectable } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { TGuest } from '../types/TGuest';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestStateService {
  private guestState = new BehaviorSubject<TGuest[]>([]);

  constructor(private guestService: GuestService) {
    this.sync();
  }

  ngOnInit() {
  }

  getGuestState() {
    return this.guestState.asObservable();
  }

  sync() {
    this.guestService.get().subscribe(guests => this.guestState.next(guests));
  }

  add(guest: TGuest) {
    this.guestService.create(guest);
    this.sync();
  }

  remove(guestId: number) {
    this.guestService.delete(guestId);
    this.sync();
  }

  update(guest: TGuest) {
    this.guestService.update(guest);
    this.sync();
  }
}
