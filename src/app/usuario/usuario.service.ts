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

  lst: Usuario[] = [];

  constructor(
    private http: HttpClient
  ) {  }

  list() {
    return this.http.get<Usuario[]>(this.API).pipe(take(1));    
  }

  loadByID(id: number) {
    return this.http.get<Usuario>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(usuario: Usuario) {
    return this.http.post(this.API, usuario).pipe(take(1));
  }

  // private update(usuario: Usuario) {
  //   return this.http.put(`${this.API}/${usuario.cdUsuario}`, usuario).pipe(take(1));
  // }

  // save(usuario: Usuario) {
  //   if (usuario.cdUsuario) {
  //     return this.update(usuario);
  //   }
  //   return this.create(usuario);
  // }

  remove(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
