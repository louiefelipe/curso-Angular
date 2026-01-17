import { Component, OnInit } from '@angular/core';
import { Pensamentoo } from '../pensamentoo';
import { FormsModule } from '@angular/forms';
import { PensamentoService } from '../pensamento-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css',
})
export class EditarPensamento implements OnInit{

  pensamento: Pensamentoo = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
  private service: PensamentoService,
  private router: Router,
  private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== '0') {
    this.service.buscarPorId(parseInt(id)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }
  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'], { onSameUrlNavigation: 'reload' }) 
    })
  }

  cancelar(){
     this.router.navigate(['/listarPensamento'])
  }

}
