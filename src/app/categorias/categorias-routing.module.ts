import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias.component';



const routes: Routes = [
  {path: '',component: CategoriasComponent,
  children: [
    {path: '', redirectTo: 'categorias', pathMatch: 'prefix'},

  { path: 'nueva-categoria', loadChildren: () => import('./nueva-categoria/nueva-categoria.module').then(m => m.NuevaCategoriaModule)},
  //{ path: 'listar-caja', loadChildren: () => import('./listar/listar.module').then(m => m.ListarModule)},
  //{ path: 'asigna-base', loadChildren: () => import('./asigna-base/asigna-base.module').then(m => m.AsignaBaseModule)},
 // { path: 'historico-caja', loadChildren: () => import('./historico/historico.module').then(m => m.HistoricoModule)},

  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
