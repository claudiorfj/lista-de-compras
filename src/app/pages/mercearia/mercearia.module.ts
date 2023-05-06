import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerceariaPageRoutingModule } from './mercearia-routing.module';

import { MerceariaPage } from './mercearia.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerceariaPageRoutingModule,
    SideMenuModule
  ],
  declarations: [MerceariaPage]
})
export class MerceariaPageModule {}
