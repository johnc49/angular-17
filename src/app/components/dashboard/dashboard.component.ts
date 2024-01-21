import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, NavbarComponent],
  providers: [ProductService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products: any;
  isData: boolean = false;
  name: boolean = false;
  customerList = signal([
    { id: 1, name: 'john', country: 'zambia' },
    { id: 2, name: 'james', country: 'SA' },
    { id: 3, name: 'jack', country: 'DRC' },
    { id: 4, name: 'jones', country: 'USA' },
  ]);
  supplierList = signal(['']);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchData().subscribe(
      (loans) => {
        this.products = loans;
        this.isData = true;
      },
      (error) => {
        this.isData = false;
        console.log('error', error);
      }
    );
  }
}
