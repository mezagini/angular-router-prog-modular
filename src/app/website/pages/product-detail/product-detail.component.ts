import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  product: Product | null = null;

  limit = 10;
  offset = 0;


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.productId = params.get('id');
          if (this.productId) {
            return this.productsService.getOne(this.productId as string);
          }
          return [null];
        })
      )
      .subscribe( data => {
        this.product = data;
      })
  }

  goToBack() {
    this.location.back();
  }

}
