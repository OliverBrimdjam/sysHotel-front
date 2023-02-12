import { Injectable } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { BehaviorSubject } from 'rxjs';
import { TInvoice } from '../types/TInvoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceStateService {
private invoiceState = new BehaviorSubject<TInvoice[]>([]);

  constructor(private invoiceService: InvoiceService) {
    this.sync();
  }

  ngOnInit() {
  }

  getInvoiceState() {
    return this.invoiceState.asObservable();
  }

  sync() {
    this.invoiceService.get().subscribe(invoices => this.invoiceState.next(invoices));
  }

  add(invoice: TInvoice) {
    this.invoiceService.create(invoice);
    this.sync();
  }

  remove(invoiceId: number) {
    this.invoiceService.delete(invoiceId);
    this.sync();
  }

  update(invoice: TInvoice) {
    this.invoiceService.update(invoice);
    this.sync();
  }
}
