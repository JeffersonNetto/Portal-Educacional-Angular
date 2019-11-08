import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoService } from './aluno.service';
import { AlunoRoutingModule } from './aluno-routing.module';


@NgModule({
  declarations: [
    AlunoListComponent,
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunoRoutingModule
  ],
  exports: [
    AlunoListComponent,
    AlunoFormComponent
  ],  
  providers: [
    AlunoService
  ],
})
export class AlunoModule { }
