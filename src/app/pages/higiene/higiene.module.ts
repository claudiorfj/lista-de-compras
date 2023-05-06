import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HigienePageRoutingModule } from './higiene-routing.module';

import { HigienePage } from './higiene.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HigienePageRoutingModule,
    SideMenuModule
  ],
  declarations: [HigienePage]
})
export class HigienePageModule {}
