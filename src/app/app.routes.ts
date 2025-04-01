import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: 'productos', 
        loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) 
      },
      { 
        path: 'tarjetas', 
        loadComponent: () => import('./productos/pages/lista-productos/card-productos.component').then(m => m.GridProductosComponent)
      }
    ]
  }
];