import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  imports: [],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

  pensamento = {
    id: '1',
    conteudo:'aprendendo angular',
    autoria: 'Louie',
    modelo: 'modelo1'
  }

}
