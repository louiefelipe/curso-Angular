import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pensamentoo } from '../pensamentoo';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class PensamentoComponent implements OnInit{
  @Input() pensamento: Pensamentoo = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor() { }
  ngOnInit(): void {
  }

  larguraPensamento (): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
  
}
