import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho';
import { Rodape } from "./componentes/rodape/rodape";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('memoteca');
}
