import { Usuario } from './Models/Usuario';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './guards/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-admin-starter-kit';
  currentUser: Usuario;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

}
