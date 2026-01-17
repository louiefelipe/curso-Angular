import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamentoo } from './pensamentoo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Pensamentoo[]>(this.API)
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

  buscarPorId(id: number): Observable<Pensamentoo>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamentoo>(url)
  }


  }
