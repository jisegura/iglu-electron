import { Component, OnInit } from '@angular/core';
import { CategoriaDataService } from '@app/service/data/categoria-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'iglu-electron';

  public constructor(
    private categoriaDataService: CategoriaDataService
  ) { }

  public ngOnInit(): void{
    this.categoriaDataService.loadAll();
  }
}
