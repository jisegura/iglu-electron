import { Injectable } from '@angular/core';
import { CategoriaDataService } from '@app/service/data/categoria-data.service';
import { Categoria } from '@app/model/categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaMethodsService {

  categorias: Categoria[];

  constructor(
    private categoriaDataService: CategoriaDataService
  ) {
    this.categoriaDataService.categorias.subscribe(categorias => {
      this.categorias = categorias;
    })
  }

  public getNombreById(id: number | string): string{
    const categoria: Categoria = this.categorias.find(categoria => categoria.Id_categoria == id);
    return (typeof categoria === 'undefined') ? null : categoria.Nombre;
  }

  /*public sortById(categorias: Observable<Categoria[]>): Observable<Categoria[]>{
    let sortedCategoria: Observable<Categoria[]> = categorias.pipe(
      tap(items => items.sort(this.sortByName));
    )
  }*/

  //OnDestroy
}
