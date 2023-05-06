import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/importante',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [
      {
        path: 'importante',
        loadChildren: () => import('./pages/importante/importante.module').then( m => m.ImportantePageModule)
      },
      {
        path: 'hortifruti',
        loadChildren: () => import('./pages/hortifruti/hortifruti.module').then( m => m.HortifrutiPageModule)
      },
      {
        path: 'compras',
        loadChildren: () => import('./pages/compras/compras.module').then( m => m.ComprasPageModule)
      },
      {
        path: 'breakfast',
        loadChildren: () => import('./pages/breakfast/breakfast.module').then( m => m.BreakfastPageModule)
      },
      {
        path: 'mercearia',
        loadChildren: () => import('./pages/mercearia/mercearia.module').then( m => m.MerceariaPageModule)
      },
      {
        path: 'talho',
        loadChildren: () => import('./pages/talho/talho.module').then( m => m.TalhoPageModule)
      },
      {
        path: 'higiene',
        loadChildren: () => import('./pages/higiene/higiene.module').then( m => m.HigienePageModule)
      },
      {
        path: 'limpeza',
        loadChildren: () => import('./pages/limpeza/limpeza.module').then( m => m.LimpezaPageModule)
      },
      {
        path: 'bebidas',
        loadChildren: () => import('./pages/bebidas/bebidas.module').then( m => m.BebidasPageModule)
      },
      {
        path: 'extras',
        loadChildren: () => import('./pages/extras/extras.module').then( m => m.ExtrasPageModule)
      },
      {
        path: 'farmacia',
        loadChildren: () => import('./pages/farmacia/farmacia.module').then( m => m.FarmaciaPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
