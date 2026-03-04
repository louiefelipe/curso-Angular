import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
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
  favoritos: boolean = false;
  listaFavoritos: Pensamentoo[] = [];
  titulo: string = 'Meu Mural';

  constructor(
    private service: PensamentoService, 
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
      this.cdr.detectChanges();
    });
  }

  carregarMaisPensamentos(){

    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if(!listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
        this.cdr.detectChanges();
      })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
        this.cdr.detectChanges();
      })
  }

  listarFavoritos(){
    this.titulo = 'Meus Favoritos'
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listaPensamentosFavoritos =>{
      this.listaPensamentos = listaPensamentosFavoritos
      this.listaFavoritos = listaPensamentosFavoritos
      this.cdr.detectChanges();
    })
  }

  recarregarMural(){
    this.titulo = 'Meu Mural'
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url]);
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
      this.cdr.detectChanges();
    });
}
  }

