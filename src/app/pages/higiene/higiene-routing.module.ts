import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HigienePage } from './higiene.page';

const routes: Routes = [
  {
    path: '',
    component: HigienePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HigienePageRoutingModule {}
