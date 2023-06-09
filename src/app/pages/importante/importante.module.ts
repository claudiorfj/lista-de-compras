import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportantePageRoutingModule } from './importante-routing.module';

import { ImportantePage } from './importante.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportantePageRoutingModule,
    SideMenuModule
  ],
  declarations: [ImportantePage]
})
export class ImportantePageModule {}
