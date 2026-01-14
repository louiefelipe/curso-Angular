import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PensamentoComponent } from "../pensamento/pensamento";
import { CommonModule } from '@angular/common';
import { Pensamentoo } from '../pensamentoo';
import { PensamentoService } from '../pensamento-service';


@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit{
  listaPensamentos: Pensamentoo [] = [];

  constructor(private service: PensamentoService){ }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
