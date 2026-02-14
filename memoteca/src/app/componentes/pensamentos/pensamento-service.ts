import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamentoo } from './pensamentoo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string): Observable<Pensamentoo[]> {
    
    const itensPorPagina = 6;
    
    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", itensPorPagina)
    .set("_sort", "id")
    .set("_order", "asc");

    if(filtro.trim().length > 2){
      params = params.set("q", filtro)
    }

    return this.http.get<Pensamentoo[]>(this.API, { params });
  }

  criar(pensamento: Pensamentoo): Observable<Pensamentoo>{
    return this.http.post<Pensamentoo>(this.API, pensamento)
  }

  editar(pensamento: Pensamentoo): Observable<Pensamentoo>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamentoo>(url, pensamento)
  }

  excluir(id: number): Observable<Pensamentoo> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamentoo>(url)
  }

  buscarPorId(id: number): Observable<Pensamentoo> {
  const url = `${this.API}/${id}`;
  return this.http.get<Pensamentoo>(url);
}


  }
