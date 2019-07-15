import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../Models/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    console.log('authservice, usuario', usuario);

    if (usuario.dsEmail === "a" && usuario.snUsuario === "a") {

      this.usuarioAutenticado = true;
      console.log('if');

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/home']);

    } else {
      console.log('else');
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
