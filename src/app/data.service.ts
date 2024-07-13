import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  map(arg0: (transaction: any) => any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/customers`);
  }

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transactions`);
  }
  // gettransactionandcustomers(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }
}
