import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TOrder } from '../types/TOrder';
import { OrderService } from '../services/order.service';

@Injectable({
  providedIn: 'root'
})
export class OrderStateService {
private orderState = new BehaviorSubject<TOrder[]>([]);

  constructor(private orderService: OrderService) {
    this.sync();
  }

  ngOnInit() {
  }

  getOrderState() {
    return this.orderState.asObservable();
  }

  sync() {
    this.orderService.get().subscribe(orders => this.orderState.next(orders));
  }

  add(order: TOrder) {
    this.orderService.create(order);
    this.sync();
  }

  remove(orderId: number) {
    this.orderService.delete(orderId);
    this.sync();
  }

  update(order: TOrder) {
    this.orderService.update(order);
    this.sync();
  }
}
