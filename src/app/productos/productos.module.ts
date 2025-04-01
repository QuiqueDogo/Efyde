import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    HttpClientModule
  ]
})
export class ProductosModule { }
