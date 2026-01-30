import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  standalone: true,
  imports: [],
  templateUrl: './botao-carregar-mais.html',
  styleUrl: './botao-carregar-mais.css',
})
export class BotaoCarregarMais implements OnInit {

@Input() haMaisPensamentos:boolean = false;

@Output() aoClicar = new EventEmitter<void>();

clicou(event: MouseEvent){
  event.stopPropagation();
  this.aoClicar.emit();
}

constructor() { }

ngOnInit(): void {
  
}

}
