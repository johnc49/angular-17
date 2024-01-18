import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // this.getData();
  }

  // getData() {
  //   const http = Inject(HttpClient);
  //   http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((res: any) => {
  //       console.log(res);
  //     });
  // }

  title = 'dashboard';
}
