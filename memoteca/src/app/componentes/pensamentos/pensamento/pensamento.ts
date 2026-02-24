import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pensamentoo } from '../pensamentoo';
import { RouterLink } from "@angular/router";
import { PensamentoService } from '../pensamento-service';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule, RouterLink],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class PensamentoComponent implements OnInit{
  @Input() pensamento: Pensamentoo = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo3',
    favorito: false
  }

  constructor(private service: PensamentoService) { }
  ngOnInit(): void {
  }

  larguraPensamento (): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorto(): string{
    if(this.pensamento.favorito == false){
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavorito(){
    this.service.mudarFavorito(this.pensamento).subscribe();
  }
  
}
