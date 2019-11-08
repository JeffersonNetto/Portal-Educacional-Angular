
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const routes: Routes = [
    {
        path: '', component: AlunoListComponent,
        children: [            
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoFormComponent },
            { path: ':id/editar', component: AlunoFormComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlunoRoutingModule { }
