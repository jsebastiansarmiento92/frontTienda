import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
//
  constructor(private httpClient: HttpClient) { }
  categoriaURL = 'http://localhost:8080/categorias';

  public getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.categoriaURL);
  }

  createCategoria(categoria:Categoria): Observable<any> {
    //alert("nombre que se envia es "+ usuario.nombreUsuario)
    console.log(categoria);
    return this.httpClient.post<Categoria>(this.categoriaURL, categoria);
  }

}
