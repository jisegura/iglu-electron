import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaDataService } from '@app/service/data/categoria-data.service';
import { Categoria } from '@app/model/categoria.model';


@Component({
  selector: 'app-hshp-products-catalogue',
  templateUrl: './hshp-products-catalogue.component.html',
  styleUrls: ['./hshp-products-catalogue.component.styl']
})
export class HshpProductsCatalogueComponent implements OnInit {

  public categorias: Observable<Categoria[]>;

  constructor(
    private categoriaDataService: CategoriaDataService
  ) { }

  ngOnInit() {
    this.categorias = this.categoriaDataService.categorias;
  }

}
