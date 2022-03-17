import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  total: number = 0;
  myShoppingCart: Product[] = [];
  products: Product[] = [];
  showProductDetail: boolean = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: ''
    },
    description: ''
  }

  constructor(
    private _storeService: StoreService,
    private _productsService: ProductsService,
  ) {
   }

  ngOnInit(): void {
    this._productsService.getAllProducts()
      .subscribe({
        next:(products) => {
          this.products = products;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {

        }
      });
  }

  onAddToShoppingCart(product: Product) {
    this._storeService.addProduct(product);
    this.myShoppingCart = this._storeService.getShoppingCart;
    this.total = this._storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this._productsService.getProduct(id)
      .subscribe({
        next: (product) => {
          this.toggleProductDetail();
          this.productChosen = product;
        },
        error: (error) => {
          console.error(error);

        }
      })
  }
}
