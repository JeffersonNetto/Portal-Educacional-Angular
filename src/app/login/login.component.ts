import { Router } from '@angular/router';
import { AuthService } from './../guards/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  exibirLoader:boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {    

  console.log('Login - usuarioEstaAutenticado', this.authService.usuarioEstaAutenticado());

    if(this.authService.usuarioEstaAutenticado()){
      console.log('navegar para home');
      this.router.navigate(['']);
    }
      

  }

  fazerLogin(){    
    this.exibirLoader = !this.exibirLoader;

    console.log('fazerLogin',this.usuario);
    this.authService.fazerLogin(this.usuario);
    
    this.exibirLoader = !this.exibirLoader;
  }
}
