import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamentoo } from './pensamentoo';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Pensamentoo[]>(this.API)
  }

  criar(pensamento: Pensamentoo){
    return this.http.post<Pensamentoo>(this.API, pensamento)
  }

}
