import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaProductComponent } from './products/lista-product/lista-product.component';
import{CategoriasComponent} from './categorias/categorias.component';
import{NuevaCategoriaComponent} from './categorias/nueva-categoria/nueva-categoria.component';
import { NuevoProductoComponent } from './products/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './products/editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './products/detalle-producto/detalle-producto.component';
import { LoginComponent } from './auth/login/login.component';
import { GuardService as guard } from './guards/guard.service';
import { AdminComponent } from './users/admin/admin.component';
import { UserComponent } from './users/user/user.component';
import { RegistroComponent } from './auth/registro/registro.component';
import {IngresosComponent} from './ingresos/lista-ingresos/ingresos.component';
import {NuevoIngresoComponent} from './ingresos/nuevo-ingreso/nuevo-ingreso.component';
import{CompraComponent}from './products/compra/compra.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: ListaProductComponent },
  //{ path: 'categorias', component: CategoriasComponent },
  { path: 'categorias', loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule) },
 // { path: 'nueva-categoria', component: NuevaCategoriaComponent },
  
  //productos: utilizando canActivate
 // {
 //   path: 'detalle/:id', component: DetalleProductoComponent,
 //   canActivate: [guard], data: { expectedRol: ['admin', 'user'] 
 // }
//  },
// {
  //  path: 'nuevo', component: NuevoProductoComponent,
  //  canActivate: [guard], data: { expectedRol: ['admin'] }
 // },
 // {
 //   path: 'editar/:id', component: EditarProductoComponent,
 //   canActivate: [guard], data: { expectedRol: ['admin'] }
 // },
 // {
 //   path: 'comprar/:id', component: CompraComponent,
 //   canActivate: [guard], data: { expectedRol: ['admin', 'user'] }
  //},

  // user y admin
 // { path: 'admin', component: AdminComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
//  { path: 'user', component: UserComponent, canActivate: [guard], data: { expectedRol: ['user'] } },
  
//seccion donde se hacen los ingresos
 // { path: 'ingresos', component: IngresosComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  //{ path: 'nuevo-ingreso', component: NuevoIngresoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },


  //{ path: 'registro', component: RegistroComponent },
 // { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
