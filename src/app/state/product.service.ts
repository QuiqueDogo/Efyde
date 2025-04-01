import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productFilterSubject = new BehaviorSubject<string>('');
  productFilter$ = this.productFilterSubject.asObservable();

  setFilter(value: string) {
    this.productFilterSubject.next(value);
  }
}