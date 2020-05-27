import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaCategoriaComponent } from './nueva-categoria.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '',component: NuevaCategoriaComponent,
  children: [
    {path: '', redirectTo: 'categorias', pathMatch: 'prefix'},
 // { path: 'listar', loadChildren: () => import('./listar/listar.module').then(m => m.ListarModule)},
  { path: 'nueva-categoria', loadChildren: () => import('./nueva-categoria.module').then(m => m.NuevaCategoriaModule)},
  {path: '**', redirectTo: 'categorias', pathMatch: 'full'}
]
  }
];

@NgModule({
  declarations: [],
  imports:  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaCategoriaRoutingModule { }
