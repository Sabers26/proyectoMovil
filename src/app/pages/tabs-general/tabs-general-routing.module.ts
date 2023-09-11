import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsGeneralPage } from './tabs-general.page';

const routes: Routes = [
  {
    path: '',
    component: TabsGeneralPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./../../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'viaje',
        loadChildren: () => import('./../../pages/viaje/viaje.module').then( m => m.ViajePageModule)
      },
      {
        path: 'mapa',
        loadChildren: () => import('./../../pages/mapa/mapa.module').then( m => m.MapaPageModule)
      },
      {
        path: 'nuevo-viaje',
        loadChildren: () => import('./../../pages/nuevo-viaje/nuevo-viaje.module').then( m => m.NuevoViajePageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../../pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'nueva-clave',
        loadChildren: () => import('./../../pages/nueva-clave/nueva-clave.module').then( m => m.NuevaClavePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsGeneralPageRoutingModule {}
