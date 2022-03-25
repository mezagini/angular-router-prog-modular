import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  limit = 10;
  offset = 0;

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this._productsService.getAll(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
  }

  loadMore() {
    this._productsService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });

  }

}
