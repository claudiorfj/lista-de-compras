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
  public sectorMenu = [
    { title: 'Importante', url: '/home/importante', icon: 'warning' },
    { title: 'Compras', url: '/home/Compras', icon: 'calculator' },
    { title: 'Hortifruti', url: '/home/hortifruti', icon: 'nutrition' },
    { title: 'Café da Manhã', url: '/home/Café da Manhã', icon: 'cafe' },
    { title: 'Mercearia', url: '/home/Mercearia', icon: 'pizza' },
    { title: 'Talho', url: '/home/Talho', icon: 'fish' },
    { title: 'Higiene', url: '/home/Higiene', icon: 'accessibility' },
    { title: 'Limpeza', url: '/home/Limpeza', icon: 'sparkles' },
    { title: 'Bebidas', url: '/home/Bebidas', icon: 'beer' },
    { title: 'Rafaela', url: '/home/Rafaela', icon: 'heart' },
    { title: 'Farmácia', url: '/home/Farmacia', icon: 'bandage' },
  ];
  public labels = ['Saco do Mercado'];


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
