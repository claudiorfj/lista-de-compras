import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HortifrutiPage } from './hortifruti.page';

const routes: Routes = [
  {
    path: '',
    component: HortifrutiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HortifrutiPageRoutingModule {}
