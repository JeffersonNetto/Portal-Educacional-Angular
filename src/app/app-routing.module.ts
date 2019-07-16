import { UsuarioModule } from './usuario/usuario.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'usuarios',
    loadChildren: () => UsuarioModule
    //loadChildren: 'app/usuario/usuario.module#UsuarioModule'
    //canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
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
