import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerceariaPage } from './mercearia.page';

const routes: Routes = [
  {
    path: '',
    component: MerceariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerceariaPageRoutingModule {}
