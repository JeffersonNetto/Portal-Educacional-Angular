import { EnderecoService } from './endereco.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Estados } from '../Models/Estados';
import { Cidades } from './../Models/Cidades';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent implements OnInit {

  formEndereco: FormGroup;
  estados: Estados[];
  cidades: Cidades[];

  constructor
    (private service: EnderecoService,
      private fb: FormBuilder
    ) {

    this.formEndereco = this.fb.group({
      cep: [''],
      logradouro: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      estado: ['', [
        Validators.required
      ]],
      cidade: ['', [
        Validators.required
      ]],
      bairro: ['', [
        Validators.required
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
        (dados: any) => {          

          console.log(dados);

          this.formEndereco.patchValue({            
            logradouro: dados.logradouro,
            complemento: dados.complemento,
            bairro: dados.bairro,        
            cidade: '',
            estado: this.estados.find(e => e.Sigla == dados.uf).ID    
          });
        },
        err => console.log(err),
        () => console.log('form', this.formEndereco.value)
      );
      
    }
  }

  CarregarCidades(idEstado: number) {
    this.service.getCidades(idEstado).subscribe(
      success => {
        this.cidades = success;
      }
    );

  }
}
