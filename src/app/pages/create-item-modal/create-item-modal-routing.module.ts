import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateItemModalPage } from './create-item-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CreateItemModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateItemModalPageRoutingModule {}
