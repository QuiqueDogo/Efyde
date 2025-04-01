import { bootstrapApplication } from '@angular/platform-browser';
import { LayoutComponent } from './app/layout/layout.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(LayoutComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));