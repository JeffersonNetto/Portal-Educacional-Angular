import { Estados } from './../Models/Estados';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEstados(){
    return this.http.get<Estados[]>('assets/dados/estados.json').pipe(take(1));          
  }

  getCidades(idEstado: number){
    return this.http.get('./cidades.json').subscribe(
      success => console.log(success)
    );          
  }
}
