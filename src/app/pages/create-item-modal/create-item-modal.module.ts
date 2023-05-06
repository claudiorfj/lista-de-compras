import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateItemModalPageRoutingModule } from './create-item-modal-routing.module';

import { CreateItemModalPage } from './create-item-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateItemModalPageRoutingModule
  ],
  declarations: [CreateItemModalPage]
})
export class CreateItemModalPageModule {}
