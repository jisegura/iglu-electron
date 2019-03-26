import { Injectable } from '@angular/core';
import { Categoria } from '@app/model/categoria.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '@app/service/log/http-error-handler.service';
import { MessageService } from '@app/service/log/message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const categoriaUrl: string = "categoria/";

@Injectable({
  providedIn: 'root'
})
export class CategoriaDataService {

  public categorias: Observable<Categoria[]>;
  private _categorias: BehaviorSubject<Categoria[]>;
  private dataStore: {
    categorias: Categoria[]
  };
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService
  ) {
    this.dataStore = { categorias: [] };
    this._categorias = <BehaviorSubject<Categoria[]>> new BehaviorSubject([]);
    this.categorias = this._categorias.asObservable();
    this.handleError = httpErrorHandler.createHandleError('[Categoria Service]');

  }

  public loadAll(): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.getCategoria().subscribe(categorias => {
      this.dataStore.categorias = categorias;
      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    }, error => {
      this.messageService.addError(error);
      obs.error(error);
    }, () => {
      this.messageService.addSuccess("Categorias Cargadas");
      obs.complete();
    });

    return obs.asObservable();
  }

  private getCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(categoriaUrl).pipe(
      catchError(this.handleError('getCategoria()', []))
    );
  }

  public load(id: number | string): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.getCategoriaById(id).subscribe(categoria => {
      let notFound = true;

      this.dataStore.categorias.forEach((item, index) => {
        if (item.Id_categoria === categoria.Id_categoria) {
          this.dataStore.categorias[index] = categoria;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.categorias.push(categoria);
      }

      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    }, error => {
      this.messageService.addError(error);
      obs.error(error);
    }, () => {
      this.messageService.addSuccess("Categoria Cargada");
      obs.complete();
    });

    return obs.asObservable();
  }

  private getCategoriaById(id: number | string): Observable<Categoria>{
    const url = `${categoriaUrl}${id}`;
    return this.http.get<Categoria>(url).pipe(
      catchError(this.handleError<Categoria>(`getCategoriaById() id=${id}`))
    );
  }

  public create(categoria: Categoria): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.addCategoria(categoria).subscribe(categoria => {
      this.dataStore.categorias.push(categoria);
      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    }, error => {
      this.messageService.addError(error);
      obs.error(error);
    }, () => {
      this.messageService.addSuccess("Categoria Nueva: " + '"'+categoria.Nombre+'"');
      obs.complete();
    });

    return obs.asObservable();
  }

  private addCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(categoriaUrl, categoria, httpOptions).pipe(
      catchError(this.handleError('addCategoria()', categoria))
    );
  }

  public update(categoria: Categoria): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.updateCategoria(categoria).subscribe(categoria => {
      this.dataStore.categorias.forEach((item, index) => {
        if (item.Id_categoria === categoria.Id_categoria) {
          this.dataStore.categorias[index] = categoria;
        }
      });

      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    }, error => {
      this.messageService.addError(error);
      obs.error(error);
    }, () => {
      this.messageService.addSuccess("Categoria Modificada");
      obs.complete();
    });

    return obs.asObservable();
  }

  private updateCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(categoriaUrl, categoria, httpOptions).pipe(
      catchError(this.handleError('updateCategoria()', categoria))
    );
  }

  public remove(id: number): Observable<any>{
    let obs = <BehaviorSubject<any>> new BehaviorSubject(null);

    this.deleteCategoria(id).subscribe(response => {
      this.dataStore.categorias.forEach((item, index) => {
        if (item.Id_categoria === id) {
          this.dataStore.categorias.splice(index, 1);
        }
      });

      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    }, error => {
      this.messageService.addError(error);
      obs.error(error);
    }, () => {
      this.messageService.addSuccess("Categoria Removida");
      obs.complete();
    });

    return obs.asObservable();
  }

  private deleteCategoria(id: number): Observable<{}>{
    const url = `${categoriaUrl}${id}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError('deleteCategoria()'))
    );
  }
}
