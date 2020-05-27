import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaCategoriaComponent } from './nueva-categoria.component';
import { NuevaCategoriaRoutingModule } from './nueva-categoria-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NuevaCategoriaComponent],
  imports: [
    CommonModule,
    NuevaCategoriaRoutingModule,
    FormsModule
  ]
})
export class NuevaCategoriaModule { }
