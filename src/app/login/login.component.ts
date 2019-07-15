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

  constructor(private authService: AuthService) { }

  ngOnInit() {    
  }

  fazerLogin(){    
    console.log('fazerLogin',this.usuario);
    this.authService.fazerLogin(this.usuario);
  }
}
