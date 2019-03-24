import { Injectable } from '@angular/core';
import { Categoria } from '@app/model/categoria.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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

  constructor(
    private http: HttpClient
  ) {
    this.dataStore = { categorias: [] };
    this._categorias = <BehaviorSubject<Categoria[]>> new BehaviorSubject([]);
    this.categorias = this._categorias.asObservable();
  }

  private getCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(categoriaUrl).pipe(
      //catchError(this.handleError('getCategoria', []))
    );
  }

  private getCategoriaById(id: number | string): Observable<Categoria>{
    const url = `${categoriaUrl}${id}`;
    return this.http.get<Categoria>(url).pipe(
      //catchError(this.handleError<Categoria>(`getCategoriaById id=${id}`))
    );
  }

  private addCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(categoriaUrl, categoria, httpOptions).pipe(
      //catchError(this.handleError('addCategoria', categoria))
    );
  }

  private updateCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(categoriaUrl, categoria, httpOptions).pipe(
      //catchError(this.handleError('updateCategoria', categoria))
    );
  }

  private deleteCategoria(id: number): Observable<{}>{
    const url = `${categoriaUrl}${id}`;
    return this.http.delete(url, httpOptions).pipe(
      //catchError(this.handleError('deleteCategoria'))
    );
  }
}
