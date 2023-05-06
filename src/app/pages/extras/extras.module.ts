import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtrasPageRoutingModule } from './extras-routing.module';

import { ExtrasPage } from './extras.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtrasPageRoutingModule,
    SideMenuModule
  ],
  declarations: [ExtrasPage]
})
export class ExtrasPageModule {}
