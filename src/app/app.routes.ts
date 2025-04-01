import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: 'productos', 
        loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) 
      }
    ]
  }
];