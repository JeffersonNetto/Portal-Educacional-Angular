import { EnderecoService } from './endereco.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Estados } from '../Models/Estados';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent implements OnInit {

  formEndereco: FormGroup;
  estados: Estados[] = [];

  constructor
    (private service: EnderecoService,
      private fb: FormBuilder
    ) {

    this.formEndereco = this.fb.group({
      cep: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      logradouro: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      estado: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
    });

  }

  ngOnInit() {
    this.service.getEstados().subscribe(
      (success) => {
        this.estados = success;
      }
    )
  }
}
