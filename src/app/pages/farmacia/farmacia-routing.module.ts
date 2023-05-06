import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmaciaPage } from './farmacia.page';

const routes: Routes = [
  {
    path: '',
    component: FarmaciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmaciaPageRoutingModule {}
