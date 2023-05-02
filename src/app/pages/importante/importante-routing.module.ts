import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportantePage } from './importante.page';

const routes: Routes = [
  {
    path: '',
    component: ImportantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportantePageRoutingModule {}
