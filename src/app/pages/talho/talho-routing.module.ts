import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalhoPage } from './talho.page';

const routes: Routes = [
  {
    path: '',
    component: TalhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalhoPageRoutingModule {}
