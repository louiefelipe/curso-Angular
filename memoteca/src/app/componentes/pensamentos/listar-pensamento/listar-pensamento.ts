import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Pensamento } from "../pensamento/pensamento";

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, Pensamento],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {

}
