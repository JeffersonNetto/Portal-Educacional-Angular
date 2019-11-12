import { AlertComponent } from './guards/alert.component';
import { AlunoModule } from './aluno/aluno.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './guards/authentication.service';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UsuarioModule } from './usuario/usuario.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,    
    AlertComponent,    
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingsComponent         
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UsuarioModule,
    AlunoModule                
  ],
  providers: [
    AuthenticationService, 
    AuthGuard,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
