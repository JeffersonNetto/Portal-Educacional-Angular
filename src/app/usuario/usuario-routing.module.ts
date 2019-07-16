import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioCadComponent } from './usuario-cad/usuario-cad.component';
import { UsuarioManComponent } from './usuario-man/usuario-man.component';

const routes: Routes = [
    {
        path: '', component: UsuarioManComponent,
        children: [            
            { path: 'novo', component: UsuarioCadComponent },
            { path: ':id', component: UsuarioCadComponent },
            { path: ':id/editar', component: UsuarioCadComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
