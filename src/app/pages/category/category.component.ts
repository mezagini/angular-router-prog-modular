import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;
  products: Product[] = [];


  limit = 10;
  offset = 0;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this._route.paramMap
      .subscribe( params => {
        this.categoryId = params.get('id');
        this._productService.getByCategory(this.categoryId as string, this.limit, this.offset)
          .subscribe( data => {
            this.products = data;
          })
      })
  }

}
