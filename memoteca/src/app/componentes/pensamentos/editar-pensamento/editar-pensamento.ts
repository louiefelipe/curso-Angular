import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PensamentoService } from '../pensamento-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css',
})
export class EditarPensamento implements OnInit{

  formulario!: FormGroup

  constructor(
  private service: PensamentoService,
  private router: Router,
  private route: ActivatedRoute,
  private formBuilder: FormBuilder,
  private cdr: ChangeDetectorRef
  ){ }

  ngOnInit(): void {
   this.formulario = this.formBuilder.group({
    id: [null],
    conteudo: ['', Validators.compose([
      Validators.required,
      Validators.pattern(/(.|\s)*\S(.|\s)*/)
    ])],
    autoria: ['', Validators.compose([
      Validators.required
    ])],
    modelo: ['modelo1'],
    favorito: [false]
   });

   const id= this.route.snapshot.paramMap.get('id');
   if (id){
    this.service.buscarPorId(parseInt(id)).subscribe((pensamento) =>{
      this.formulario.patchValue(pensamento);
    })
   }
  }

  editarPensamento() {
    if (this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe({
        next: () => {
          this.router.navigate(['/listarPensamento']); 
        },
        error: (erro) => console.error('Erro ao editar:', erro)
      });
    }
  }

  habilitarBotao(): string {
    return this.formulario.valid ? 'botao' : 'botao_desabilitado';
  }
  

  cancelar(){
     this.router.navigate(['/listarPensamento']);
  }

}
