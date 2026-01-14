import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PensamentoComponent } from "../pensamento/pensamento";
import { NgForOf, CommonModule } from '@angular/common';
import { Pensamentoo } from '../pensamentoo';


@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, PensamentoComponent, NgForOf, CommonModule],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {
  listaPensamentos: Pensamentoo [] = [];

}
