import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Usuario } from './../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}usuarios`;

  lst: Usuario[] = [
    { 
      cdUsuario:1,
      nmUsuario:'Jeff',
      login:'jeff',
      email:'jefferson@arwebsistemas.com',
      idAtivo:true,
      nmComputador:'::1',
      dtIncReg: new Date(),
      dtUltAlt: new Date(),
      stMaster:true,
      senha:'123',
     },
     { 
      cdUsuario:2,
      nmUsuario:'tatiane',
      login:'tati',
      email:'tati@teste.com',
      idAtivo:true,
      nmComputador:'::1',
      dtIncReg: new Date(),
      dtUltAlt: new Date(),
      stMaster:true,
      senha:'123',
     },
  ];

  constructor(
    private http: HttpClient
  ) {  }

  list() {
    //return this.http.get<Usuario[]>(this.API).pipe(take(1));
    return this.lst;    
  }

  loadByID(id: number) {
    return this.http.get<Usuario>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(usuario: Usuario) {
    return this.http.post(this.API, usuario).pipe(take(1));
  }

  private update(usuario: Usuario) {
    return this.http.put(`${this.API}/${usuario.cdUsuario}`, usuario).pipe(take(1));
  }

  save(usuario: Usuario) {
    if (usuario.cdUsuario) {
      return this.update(usuario);
    }
    return this.create(usuario);
  }

  remove(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
