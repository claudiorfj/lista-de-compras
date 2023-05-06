import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SectorMenu, Labels } from 'src/app/common/data';
import { IProduct } from 'src/app/interfaces/IProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  cart: IProduct[] = [];
  products: IProduct[] = [];
  cartItemCount!: BehaviorSubject<number>;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product: IProduct) {
    this.cartService.addProduct(product);
  }

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
