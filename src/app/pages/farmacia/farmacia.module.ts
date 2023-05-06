import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmaciaPageRoutingModule } from './farmacia-routing.module';

import { FarmaciaPage } from './farmacia.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmaciaPageRoutingModule,
    SideMenuModule
  ],
  declarations: [FarmaciaPage]
})
export class FarmaciaPageModule {}
