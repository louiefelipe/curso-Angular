import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

  pensamento = {
    conteudo:'',
    autoria: '',
  }

  salvarPensamento(){
    alert('Pensamento salvo com sucesso!');
  }

  cancelar(){
    alert('Ação cancelada!');
  }

}
