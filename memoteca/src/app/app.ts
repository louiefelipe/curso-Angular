import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho';
import { Rodape } from "./componentes/rodape/rodape";
import { CriarPensamento } from "./componentes/pensamentos/criar-pensamento/criar-pensamento";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, Rodape, CriarPensamento],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('memoteca');
}
