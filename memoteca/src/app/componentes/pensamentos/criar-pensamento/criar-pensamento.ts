import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pensamentoo } from '../pensamentoo';
import { PensamentoService } from '../pensamento-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento implements OnInit{

  pensamento: Pensamentoo = {
    id: 0,
    conteudo:'',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ){

  }

  ngOnInit(): void{

  }

 salvarPensamento() {
  this.service.criar(this.pensamento).subscribe(() => {
    this.router.navigate(['/listarPensamento']);
  });
}
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
