import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  data: IProduct[] = [
    { id: 0, name: 'Arroz', price: 0.89, amount: 1, sector: 'Cereais' },
    { id: 1, name: 'Leite', price: 0.49, amount: 1, sector: 'Café da Manhã' },
    { id: 2, name: 'Alho', price: 1.1, amount: 1, sector: 'Hortifruti' },
    { id: 3, name: 'Condicionador', price: 2.2, amount: 1, sector: 'Higiene' },
  ];

  private cart: IProduct[] = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product: IProduct) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product: IProduct) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        if (p.amount > 1) {
          p.amount -= 1;
        } else {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product: IProduct) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id == product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
        product.amount = 1;
      }
    }
  }
}
