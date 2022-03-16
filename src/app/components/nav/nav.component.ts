import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  activeMenu: boolean = false;
  counter = 0;

  subscription!: Subscription;
  subscriptions!: Subscription[];


  constructor(private _storeService: StoreService) { }

  ngOnDestroy(): void {

    // Si se tendrán más subscripciones
    this.subscriptions.forEach(sub => {
      if (sub !== null) {
        sub.unsubscribe()
      }
    });

    // Manejar una sola subscripción
    this.subscription ? this.subscription.unsubscribe() : null;

  }

  ngOnInit(): void {

    // Si se tendrán más subscripciones
    this.subscriptions = [
      this.getMyCartLength()
    ]

    // Manejar una sola subscripción
    this.subscription = this.getMyCartLength()
  }

  getMyCartLength(): Subscription {
    return this._storeService.myCart$
      .subscribe(products => {
        this.counter = products.length;
      });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
