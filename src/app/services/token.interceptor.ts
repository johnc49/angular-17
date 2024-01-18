import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  console.log(`Request on the way ${req.url}`);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer token'),
  });
  return next(authReq).pipe(
    catchError((e: HttpErrorResponse) => {
      if (e.status === 410) {
        router.navigate([]);
      }
      const error = e.error?.message || e.statusText;
      return throwError(() => error);
    })
  );
};
