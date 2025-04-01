import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../../state/product.service';
// import { ProductService } from '../product.service';

@Component({
  selector: 'app-grid-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './card-productos.component.html',
  styleUrls: ['./card-productos.component.scss']
})
export class GridProductosComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.searchProducts('').subscribe((data: any[]) => {
      this.products = data;
    });
  }
}