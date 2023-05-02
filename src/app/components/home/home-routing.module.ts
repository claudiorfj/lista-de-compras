import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home/:id',
    loadChildren: () => import('../../components/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'importante',
    loadChildren: () => import('../../pages/importante/importante.module').then( m => m.ImportantePageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('../../pages/compras/compras.module').then( m => m.ComprasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
