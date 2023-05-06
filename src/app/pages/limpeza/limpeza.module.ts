import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpezaPageRoutingModule } from './limpeza-routing.module';

import { LimpezaPage } from './limpeza.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpezaPageRoutingModule,
    SideMenuModule
  ],
  declarations: [LimpezaPage]
})
export class LimpezaPageModule {}
