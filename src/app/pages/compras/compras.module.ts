import { AppComponent } from '../../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprasPageRoutingModule } from './compras-routing.module';

import { ComprasPage } from './compras.page';
import { FolderPage } from '../folder/folder.page';
import { FolderPageModule } from '../folder/folder.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprasPageRoutingModule
  ],
  declarations: [ComprasPage]
})
export class ComprasPageModule {}
