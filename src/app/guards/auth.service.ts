import { take } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../Models/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = `${environment.API}usuarios/login`;

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  fazerLogin(usuario: Usuario) {

    //const header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    this.http.post(this.API, usuario).pipe(take(1)).subscribe(
      (success: any) => {

        console.log(success);

        localStorage.setItem('token', success['token']);

        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/home']);
      },
      (err: HttpErrorResponse) => {

        console.log(err);

        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false);
      },
    );
  }

  usuarioEstaAutenticado() { 
    //return this.usuarioAutenticado;
    console.log('Auth - usuarioEstaAutenticado', this.usuarioAutenticado = !!localStorage.getItem('token'));
    return this.usuarioAutenticado = !!localStorage.getItem('token');
  }
}
