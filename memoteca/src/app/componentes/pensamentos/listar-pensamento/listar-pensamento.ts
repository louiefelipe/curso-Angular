import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PensamentoComponent } from "../pensamento/pensamento";
import { NgForOf, CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, PensamentoComponent, NgForOf, CommonModule],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {
  listaPensamentos = [
    {
    conteudo: 'Comunicação entre Componentes',
    autoria: 'Dev',
    modelo: 'modelo1'
  },

    {
    conteudo: 'Angular Mentoria',
    autoria: 'Eu',
    modelo: 'modelo3'
  },
    {
    conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
    autoria: '',
    modelo: 'modelo1'
  }

  ];

}
