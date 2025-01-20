import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { productsReducer } from './store/products/products.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      products: productsReducer,
    }),
    provideStoreDevtools(),
    provideAnimations(),
    provideToastr(),
    // importProvidersFrom(
    //   BrowserAnimationsModule,
    //   ToastrModule.forRoot({
    //     timeOut: 3000,
    //     positionClass: 'toast-top-right',
    //     preventDuplicates: true,
    //   })
    // ),
  ],
};
