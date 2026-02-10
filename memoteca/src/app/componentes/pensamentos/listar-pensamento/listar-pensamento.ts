import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PensamentoComponent } from "../pensamento/pensamento";
import { Pensamentoo } from '../pensamentoo';
import { PensamentoService } from '../pensamento-service';
import { BotaoCarregarMais } from "./botao-carregar-mais/botao-carregar-mais";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, BotaoCarregarMais, FormsModule],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit{

  listaPensamentos: Pensamentoo [] = [];
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true;
  filtro: string = ''

  constructor(
    private service: PensamentoService, 
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
      this.cdr.detectChanges();
    });
  }

  carregarMaisPensamentos(){
  this.service.listar(++this.paginaAtual, this.filtro).subscribe((listaNova) => {
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

  pesquisarPensamentos(){
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro)
    .subscribe(listaPensamentos => {
      this.listaPensamentos = this.listaPensamentos
    }) 
  }

}
