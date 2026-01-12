import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Pensamento } from "../pensamento/pensamento";
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, Pensamento, NgForOf],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {
  listaPensamentos = [
    {
    conteudo: 'Angular teste',
    autoria: 'Dev',
    modelo: 'modelo1'
  }
  ];

}
