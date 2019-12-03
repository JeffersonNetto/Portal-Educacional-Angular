import { EnderecoService } from './endereco.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Estados } from '../models/Estados';
import { Cidades } from '../models/Cidades';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent implements OnInit {

  formEndereco: FormGroup;
  estados: Estados[];
  cidades: Cidades[];
  idEstado: number;
  idCidade: number;
  dados:any;
  

  constructor (
      private service: EnderecoService,
      private fb: FormBuilder
    ) {

    this.formEndereco = this.fb.group({
      cep: [''],      
      estado: ['', [
        Validators.required
      ]],
      cidade: ['', [
        Validators.required
      ]],
      bairro: ['', [
        Validators.required
      ]],
      logradouro: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      numero: ['', [
        Validators.required
      ]],
      complemento: [''],
    });
  }

  ngOnInit() {
    this.service.getEstados().subscribe(
      success => {
        this.estados = success;
      }
    );
  }

  ConsultaCEP(cep: string) {    

    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.service.consultaCEP(cep).subscribe(
        (success: any) => {

          this.dados = success;                    
                              
        },
        err => console.log(err),
        () => {                              

          this.idEstado = this.estados.find(_ => _.Sigla == this.dados.uf).ID;
          this.CarregarCidades(this.idEstado, true);
        }
      );

    }
  }

  CarregarCidades(idEstado: number, preencherFormulario: boolean = false) {    

    this.service.getCidades(idEstado).subscribe(
      (success) => {

        this.cidades = success;
                
      },
      err => console.log(err),
      () => {                
        
        if(preencherFormulario) {          
          this.PreencherFormulario();        
        }
                
      }
    );
  }

  PreencherFormulario() {
    this.formEndereco.patchValue({
      logradouro: this.dados.logradouro,
      complemento: this.dados.complemento,
      bairro: this.dados.bairro,
      cidade: this.cidades.find(_ => _.Nome == this.dados.localidade).ID,
      estado: this.idEstado
    });
  }
}
