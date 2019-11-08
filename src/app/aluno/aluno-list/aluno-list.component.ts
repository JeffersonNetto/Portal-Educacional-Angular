import { Aluno } from './../../Models/Aluno';
import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  alunos: Aluno[] = [];
  exibirLoader:boolean = false;

  constructor(
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
    
    this.exibirLoader = !this.exibirLoader;

    this.alunoService.list().subscribe(
      (success: Aluno[]) => {
        console.log(success);
        this.alunos = success;
      },      
      (err: HttpErrorResponse) => {
        console.log(err);
      },
      () => this.exibirLoader = !this.exibirLoader
    );  
  }
}
