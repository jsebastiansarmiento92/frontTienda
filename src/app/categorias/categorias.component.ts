import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../services/categorias.service';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias:Categoria[]=[];
  categoria:Categoria= new Categoria();

  eliminado = false;
  failEliminado = false;
  msjErr = '';
  msjOK = '';
  loader:boolean = true;

  
  constructor(private router:Router,private categoriaService:CategoriasService) { }

  ngOnInit() {
    this.cargarCategorias();
  }
  nueva(){
    console.log("ingreso a nueva categoria")
    this.router.navigate(["categorias/nueva-categoria"]);
  }
  cargarCategorias(){
    this.categoriaService.getCategorias().subscribe(data=>{ this.categorias=data;
      //console.log(this.empresas);
      this.loader = false;
    });
  }
}
