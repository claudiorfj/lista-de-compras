import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalhoPageRoutingModule } from './talho-routing.module';

import { TalhoPage } from './talho.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalhoPageRoutingModule,
    SideMenuModule
  ],
  declarations: [TalhoPage]
})
export class TalhoPageModule {}
