import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-create-item-modal',
  templateUrl: './create-item-modal.page.html',
  styleUrls: ['./create-item-modal.page.scss'],
})
export class CreateItemModalPage implements OnInit {

  products: IProduct[] = []
  form: any
  name: string = '';
  price: number = 0;
  amount: number = 0;
  sector: string = '';


  constructor(
    private modalCtrl: ModalController,
    ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  onSubmit(){
    console.log('submit funciona')
    console.log('Nome:', this.name);
    console.log('Preço:', this.price);
    console.log('Quantidade:', this.amount);
    console.log('Setor:', this.sector);
    this.modalCtrl.dismiss();
  }

}
