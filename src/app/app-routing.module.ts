import { UsuarioModule } from './usuario/usuario.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlunoModule } from './aluno/aluno.module';

const routes: Routes = [  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {
  //   path: 'usuarios',
  //   loadChildren: () => import('./aluno/aluno.module').then(m => m.DashboardModule)
  //   //loadChildren: 'app/usuario/usuario.module#UsuarioModule'
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'alunos',    
    loadChildren: () => import('./aluno/aluno.module').then(_ => _.AlunoModule)
    //canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'default', redirectTo: '/home', pathMatch: 'full' },
  { path: 'index', redirectTo: '/home', pathMatch: 'full' },
  { path: 'inicio', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
