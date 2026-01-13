import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class PensamentoComponent implements OnInit{
  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo2'
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
