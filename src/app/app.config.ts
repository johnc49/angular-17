import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { TryingInterceptor } from './trying.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TryingInterceptor,
      multi: true,
    },
  ],
};
