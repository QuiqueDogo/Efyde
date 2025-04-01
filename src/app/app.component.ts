import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosModule } from './productos/productos.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LayoutComponent,  HttpClientModule,ProductosModule,]
})
export class AppComponent { }