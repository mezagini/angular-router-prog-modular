import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product, UpdateProductDTO } from 'src/app/models/product.model';
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

  createNewProduct() {
    const product: CreateProductDTO = {
      price: 0,
      images: [],
      title: '',
      categoryId: 1,
      description: ''
    }

    this._productsService.create(product)
      .subscribe({
        next: (product) => {
          this.onAddToShoppingCart(product);
        },
        error: () => {

        }
      })

  }

  updateProduct() {
    const changes: UpdateProductDTO = {

    }
    const id = this.productChosen.id;
    this._productsService.update(id, changes)
      .subscribe({
        next: (product) => {
          const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
          this.products[productIndex] = product;
          this.productChosen = product;
        },
        error: () => {

        }
      })

  }

  deleteProduct() {
    const id = this.productChosen.id;
    this._productsService.delete(id)
      .subscribe({
        next: () => {
          const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
          this.products.splice(productIndex, 1);
          this.showProductDetail = false;
        },
        error: () => {

        }
      })
  }
}
