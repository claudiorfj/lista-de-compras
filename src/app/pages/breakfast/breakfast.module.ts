import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakfastPageRoutingModule } from './breakfast-routing.module';

import { BreakfastPage } from './breakfast.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreakfastPageRoutingModule,
    SideMenuModule
  ],
  declarations: [BreakfastPage]
})
export class BreakfastPageModule {}
