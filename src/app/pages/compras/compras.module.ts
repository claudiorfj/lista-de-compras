import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprasPageRoutingModule } from './compras-routing.module';

import { ComprasPage } from './compras.page';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@NgModule({
    declarations: [ComprasPage,],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComprasPageRoutingModule,
        SideMenuModule,
    ]
})
export class ComprasPageModule {}
