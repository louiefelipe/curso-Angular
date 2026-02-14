import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PensamentoService } from '../pensamento-service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
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
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

 salvarPensamento() {
  if (this.formulario.valid){
   this.service.criar(this.formulario.value).subscribe({
    next: () => {
        this.router.navigate(['/listarPensamento']);
      },
      error: (erro) => {
        console.error('Erro ao salvar pensamento:', erro);
      }
    });
  } else {
    this.formulario.markAsTouched();
    console.log('Erros de validação na autoria', this.formulario.get('autoria')?.errors)
  }
  
}
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao_desabilitado'
    }
  }

}
