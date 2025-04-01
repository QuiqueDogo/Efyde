import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ProductService } from '../../../state/product.service';
@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule], 
  providers:[ProductService],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  searchControl = new FormControl('');
  products: any[] = [];
  loading = true;
  error = '';
  filteredProducts: any[] = [];
  // productService: any;

  constructor(private http: HttpClient,private productService: ProductService) {
   
  }

  ngOnInit() {
    console.log('Inicio ');
    this.obtenerProductos();

    this.productService.searchProducts('').subscribe((data: any[]) => {
      this.products = data;
      this.filteredProducts = data;
    });

    this.searchControl.valueChanges
    .pipe(debounceTime(300), distinctUntilChanged())
    .subscribe(query => {
      this.filteredProducts = this.filterProducts(query);
    });
  }

  private filterProducts(query: any): any[] {
    if (!query) {
      return this.products; 
    }

    query = query.toLowerCase();
    
    return this.products.filter(product =>
      product.title.toLowerCase().includes(query) ||  
      product.category.toLowerCase().includes(query) ||  
      product.price.toString().includes(query)  
    );
  }

  obtenerProductos() {
    this.http.get<any[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error al obtener los productos';
          this.loading = false;
        }
      });
  }
}