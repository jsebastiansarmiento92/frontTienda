import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit {
  categoria:Categoria = new Categoria();
  msjErr = '';
  msjOK = '';
  creado = false;
  failCreado = false;
  

  constructor(private router:Router,private categoriaService:CategoriasService) { }

  ngOnInit() {
  }
  guardarCategoria(){
    this.categoria.estado="A";

    this.categoriaService.createCategoria(this.categoria).subscribe(data=>{
      this.creado = true;
      this.failCreado = false;
      console.log(data.mensaje);
      this.msjOK = data.mensaje;
      this.router.navigate(["categorias"]);
      
    }, (err: any) => {
      this.creado = false;
      this.failCreado = true;
      this.msjErr = err.error.mensaje;
      console.log(err.error.mensaje)
    });
    this.categoria=new Categoria();
  }

}
