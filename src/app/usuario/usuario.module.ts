import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioService } from './usuario.service';
import { UsuarioCadComponent } from './usuario-cad/usuario-cad.component';
import { UsuarioManComponent } from './usuario-man/usuario-man.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    UsuarioManComponent,
    UsuarioCadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule
  ],
  exports: [
    UsuarioManComponent, 
    UsuarioCadComponent
  ],  
  providers: [
    UsuarioService
  ],
})
export class UsuarioModule { }
