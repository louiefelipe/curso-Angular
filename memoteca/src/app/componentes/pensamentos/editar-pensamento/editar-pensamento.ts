import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Pensamentoo } from '../pensamentoo';
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

  pensamento: Pensamentoo = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

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
      Validators.minLength(3)
    ])],
    modelo: ['modelo1']
   });
   const id= this.route.snapshot.paramMap.get('id');
   if (id){
    this.service.buscarPorId(parseInt(id)).subscribe((pensamento) =>{
      this.formulario.patchValue(pensamento);
    })
   }
  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'], { onSameUrlNavigation: 'reload' }) 
    })
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao_desabilitado'
    }
  }
  

  cancelar(){
     this.router.navigate(['/listarPensamento'])
  }

}
