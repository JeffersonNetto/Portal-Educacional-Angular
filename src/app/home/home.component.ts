import { Usuario } from './../Models/Usuario';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../guards/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) { 
      this.usuario = this.authenticationService.currentUserValue;
    }

  ngOnInit() { 
  }
}
