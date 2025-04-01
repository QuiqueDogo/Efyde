import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products'; 

  constructor(private http: HttpClient) { }

  searchProducts(query: string): Observable<any> {
    if (!query) {
      return this.http.get<any[]>(this.apiUrl); 
    }
    return this.http.get<any[]>(`${this.apiUrl}?q=${query}`);
  }
}