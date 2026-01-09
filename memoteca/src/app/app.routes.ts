import { Routes } from '@angular/router';
import { CriarPensamento } from './componentes/pensamentos/criar-pensamento/criar-pensamento';
import { ListarPensamento } from './componentes/pensamentos/listar-pensamento/listar-pensamento';

export const routes: Routes = [
     {
        path: '',
        redirectTo: 'listarPensamento',
        pathMatch: 'full'
     },
     {
        path: 'criarPensamento',
        component: CriarPensamento
     },
     {
        path: 'listarPensamento',
        component: ListarPensamento
     }
];
