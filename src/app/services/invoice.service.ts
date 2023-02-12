import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TInvoice } from '../types/TInvoice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<TInvoice[]> {
    return this.http.get<TInvoice[]>(`${this.apiURL}/invoices`);
  }

  getById(id: number): Observable<TInvoice> {
    return this.http.get<TInvoice>(`${this.apiURL}/invoices/${id}`);
  }

  create(invoice: TInvoice): Observable<TInvoice> {
    return this.http.post<TInvoice>(`${this.apiURL}/invoices`, invoice);
  }

  update(invoice: TInvoice): Observable<TInvoice> {
    return this.http.put<TInvoice>(`${this.apiURL}/invoices`, invoice);
  }

  delete(id: number): Observable<TInvoice> {
    return this.http.delete<TInvoice>(`${this.apiURL}/invoices/${id}`);
  }
}
