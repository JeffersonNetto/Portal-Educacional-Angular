import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-usuario-man',
  templateUrl: './usuario-man.component.html',
  styleUrls: ['./usuario-man.component.scss']
})
export class UsuarioManComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    console.log('entrou');
    this.usuarioService.list();  
  }
}
