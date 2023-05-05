import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HortifrutiPageRoutingModule } from './hortifruti-routing.module';

import { HortifrutiPage } from './hortifruti.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HortifrutiPageRoutingModule,
    SideMenuModule
  ],
  declarations: [HortifrutiPage]
})
export class HortifrutiPageModule {}
