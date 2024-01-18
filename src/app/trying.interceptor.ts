// auth-interceptor.service.ts

import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TryingInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('interceptor trying');

    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer trying token'),
    });

    return next.handle(authRequest);
  }
}
