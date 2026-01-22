import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pensamentoo } from '../pensamentoo';
import { PensamentoService } from '../pensamento-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento implements OnInit{

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ){

  }

  ngOnInit(): void{
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário Reativo'],
      autoria: ['Angular'],
      modelo: ['modelo1']
    })
  }

 salvarPensamento() {
  this.service.criar(this.formulario.value).subscribe(() => {
    this.router.navigate(['/listarPensamento']);
  });
}
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
