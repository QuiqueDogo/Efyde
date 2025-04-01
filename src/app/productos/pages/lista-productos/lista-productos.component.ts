import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  private productosSubject = new BehaviorSubject<Producto[]>([]);
  productos$ = this.productosSubject.asObservable();

  productos: Producto[] = [
    { id: 1, nombre: 'Laptop', precio: 15000, categoria: 'Electrónica' },
    { id: 2, nombre: 'Teléfono', precio: 8000, categoria: 'Electrónica' },
    { id: 3, nombre: 'Mesa', precio: 2000, categoria: 'Muebles' }
  ];

  ngOnInit() {
    this.productosSubject.next(this.productos);
  }

  filtrarProductos(event: Event) {
    const valor = (event.target as HTMLInputElement).value.toLowerCase();
    const productosFiltrados = this.productos.filter(p =>
      p.nombre.toLowerCase().includes(valor)
    );
    this.productosSubject.next(productosFiltrados);
  }
}