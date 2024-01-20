import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(2000),
        catchError((error: any) => {
          // Handle the error here (e.g., log it)
          console.error('Error occurred during HTTP request:', error);
          throw error; // Re-throw the error to propagate it to the component
        })
      );
  }
}
