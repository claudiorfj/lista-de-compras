import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportantePageRoutingModule } from './importante-routing.module';

import { ImportantePage } from './importante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportantePageRoutingModule
  ],
  declarations: [ImportantePage]
})
export class ImportantePageModule {}
