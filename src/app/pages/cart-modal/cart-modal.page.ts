import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: IProduct[] = []

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart()
  }

  decreaseCartItem(product: IProduct){
    this.cartService.decreaseProduct(product)
  }

  increaseCartItem(product: IProduct){
    this.cartService.addProduct(product)
  }

  removeCartItem(product: IProduct){
    this.cartService.removeProduct(product)
  }

  getTotal() {
    const total = this.cart.reduce((accumulator, product) => {
      return accumulator + product.price * product.amount
    }, 0);
    return total;
  }

  close(){
    this.modalCtrl.dismiss()
  }

  checkout(){

  }

}
