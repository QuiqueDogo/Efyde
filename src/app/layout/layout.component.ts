import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductosRoutingModule } from '../productos/productos-routing.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [ProductosRoutingModule]
})
export class LayoutComponent { }