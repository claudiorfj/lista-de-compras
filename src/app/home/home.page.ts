import { CartService } from '../services/cart.service';
import { IProduct } from './../interfaces/IProduct';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterEvent } from '@angular/router';
// import { ModalController } from '@ionic/angular';
// import { CartModalPage } from '../pages/cart-modal/cart-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  cart: IProduct[] = [];
  products: IProduct[] = [];
  cartItemCount!: BehaviorSubject<number>;

  constructor(
    private cartService: CartService,
    private router: Router,
    // private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product: IProduct) {
    this.cartService.addProduct(product);
  }

  // async openCart(){
  //   let modal = await this.modalCtrl.create({
  //     component: CartModalPage,
  //     cssClass: 'cart-modal'
  //   })
  //   modal.present()
  // }

  getTotal() {
    const total = this.cart.reduce((accumulator, product) => {
      return accumulator + product.price * product.amount;
    }, 0);
    return total;
  }

  decreaseCartItem(product: IProduct) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product: IProduct) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product: IProduct) {
    this.cartService.removeProduct(product);
  }
}
