import { AppModule } from './../app.module';
import { EnderecoService } from './../endereco-form/endereco.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoService } from './aluno.service';
import { AlunoRoutingModule } from './aluno-routing.module';
import { RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno.component';
import { TextMaskModule } from 'node_modules/angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { EnderecoFormComponent } from '../endereco-form/endereco-form.component';

@NgModule({
  declarations: [
    AlunoListComponent,
    AlunoFormComponent,
    AlunoComponent,
    EnderecoFormComponent        
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AlunoRoutingModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule    
  ],
  exports: [
    EnderecoFormComponent    
  ],  
  providers: [
    AlunoService,
    EnderecoService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AlunoModule { }
