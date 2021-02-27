import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseUrl = 'https://localhost:44385/api/inventory';

  constructor(private http: HttpClient) { }

  createInventory(inventory: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, inventory);
  }

  getInventoryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getinventory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateInventory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteInventory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
