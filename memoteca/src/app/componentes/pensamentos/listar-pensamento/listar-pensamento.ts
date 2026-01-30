import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PensamentoComponent } from "../pensamento/pensamento";
import { Pensamentoo } from '../pensamentoo';
import { PensamentoService } from '../pensamento-service';
import { BotaoCarregarMais } from "./botao-carregar-mais/botao-carregar-mais";


@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, BotaoCarregarMais],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit{

  listaPensamentos: Pensamentoo [] = [];
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true;

  constructor(
    private service: PensamentoService, 
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
      this.cdr.detectChanges();
    });
  }

  carregarMaisPensamentos(){
  this.service.listar(this.paginaAtual + 1).subscribe((listaNova) => {
    if(listaNova.length){
      this.listaPensamentos = [...this.listaPensamentos, ...listaNova];
      this.paginaAtual++;
    }
    if(listaNova.length < 5){
      this.haMaisPensamentos = false;
    }
    this.cdr.detectChanges();
  });
  }

}
