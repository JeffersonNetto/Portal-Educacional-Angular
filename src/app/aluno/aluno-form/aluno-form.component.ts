import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  exibirAlert: boolean = false;
  exibirLoader: boolean = false;
  form: FormGroup;
  celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  foneMask = ['(', /[1-8]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cpfMask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  mensagem: string;
  sucesso: boolean = false;

  constructor(
    private service: AlunoService,
    private fb: FormBuilder,
  ) {

    this.form = this.fb.group({
      nome: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      cpf: ['', [
        Validators.required,
        Validators.minLength(14)
      ]],
      rg: [''],
      telefone: [''],
      profissao: [''],
      celular: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      cep: [''],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
    });

  }

  ngOnInit() {

  }

  Salvar() {

    this.exibirLoader = true;

    this.form.value.nome = this.form.value.nome.replace(/\s{2,}/g, ' ');

    this.form.value.nome = this.form.value.nome.trim();

    console.log(this.form.value);

    // this.service.save(this.form.value).subscribe(
    //   (success: any) => {              
    //     this.mensagem = 'Pré-inscrição realizada com sucesso! Um e-mail foi enviado para o endereço informado. Verifique sua caixa de spam!';
    //     this.sucesso = success.sucesso;
    //     this.exibirAlert = true;
    //     this.exibirLoader = false;
    //   },
    //   (err: HttpErrorResponse) => {            
    //     this.mensagem = err.error.mensagem;
    //     this.sucesso = err.error.sucesso;
    //     this.exibirAlert = true;
    //     this.exibirLoader = false;
    //   },      
    // );

  }

  nomeValido(nome: string) {
    var reTipo = /[A-z][ ][A-z]/;
    return reTipo.test(nome) && nome.length >= 6;
  }

  cpfValido(cpf: string) {
    let result = cpf.replace(/_/g, '').replace('-', '').replace(/\./g, '');
    return result.length == 11;
  }

  telefoneValido(celular: string) {
    let result = celular.replace('(', '').replace(')', '').replace(' ', '').replace('-', '').replace(/_/g, '');
    return result.length > 10;
  }

  DefinirEndereco(endereco: any) {    

    this.form.patchValue({
      cep: endereco.cep,
      logradouro: endereco.logradouro,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      estado: endereco.estado,
      numero: endereco.numero,
      complemento: endereco.complemento,
    });    

  }

}
