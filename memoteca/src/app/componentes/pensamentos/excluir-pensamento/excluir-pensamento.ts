import { Component, OnInit } from '@angular/core';
import { Pensamentoo } from '../pensamentoo';
import { PensamentoService } from '../pensamento-service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './excluir-pensamento.html',
  styleUrl: './excluir-pensamento.css',
})
export class ExcluirPensamento implements OnInit{
  
  pensamentoo: Pensamentoo = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor (
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
  ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id){

      this.service.buscarPorId(parseInt(id)).subscribe((pensamentoo) => {
      this.pensamentoo = pensamentoo
    })
    } 
  }

  excluirPensamento() {
    if(this.pensamentoo.id){
      this.service.excluir(this.pensamentoo.id).subscribe(() => {
       this.router.navigate(['/listarPensamento'], { onSameUrlNavigation: 'reload' });
        });
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
