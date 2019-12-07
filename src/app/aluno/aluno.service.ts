import { Usuario } from './../models/Usuario';
import { Aluno } from './../models/Aluno';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = `${environment.API}alunos`;

  Alunos: Aluno[] = [];

  header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Usuario')).token });

  constructor(
    private http: HttpClient
  ) {  }

  list() {    
    return this.http.get<Aluno[]>(this.API, { headers: this.header }).pipe(take(1));    
  }

  loadByID(id: number) {
    return this.http.get<Aluno>(`${this.API}/${id}`, { headers: this.header }).pipe(take(1));
  }

  private create(aluno: Aluno) {
    return this.http.post(this.API, aluno, { headers: this.header }).pipe(take(1));
  }

  private update(aluno: Aluno) {
    return this.http.put(`${this.API}/${aluno.Id}`, aluno, { headers: this.header }).pipe(take(1));
  }

  save(aluno: Aluno) {
    if (aluno.Id) {
      return this.update(aluno);
    }
    return this.create(aluno);
  }

  remove(id: number) {
    return this.http.delete(`${this.API}/${id}`, { headers: this.header }).pipe(take(1));
  }
}
