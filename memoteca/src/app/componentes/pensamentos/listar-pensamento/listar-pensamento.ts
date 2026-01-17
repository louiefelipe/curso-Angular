import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PensamentoComponent } from "../pensamento/pensamento";
import { Pensamentoo } from '../pensamentoo';
import { PensamentoService } from '../pensamento-service';


@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit{
  listaPensamentos: Pensamentoo [] = [];

  constructor(private service: PensamentoService, private cdr: ChangeDetectorRef)
  { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
      this.cdr.detectChanges();
    });
  }

}
