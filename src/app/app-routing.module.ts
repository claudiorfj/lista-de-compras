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
