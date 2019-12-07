import { Estados } from './../models/Estados';
import { Cidades } from './../models/Cidades';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEstados() {
    return this.http.get<Estados[]>('assets/dados/estados.json').pipe(take(1));
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidades[]>('assets/dados/cidades.json').pipe(
      map((cidades: Cidades[]) => cidades.filter(c => c.Estado == idEstado)),
      take(1)
    );
  }

  consultaCEP(cep: string) {
    
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of({});
  }
}
