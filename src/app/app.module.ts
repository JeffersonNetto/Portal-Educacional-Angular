import { TextMaskModule } from 'node_modules/angular2-text-mask';
import { EnderecoService } from './endereco-form/endereco.service';
import { AlertComponent } from './guards/alert.component';
import { AlunoModule } from './aluno/aluno.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';


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
    HttpClientModule, //UsuarioModule,   
    AlunoModule,
    TextMaskModule                
  ],
  exports: [
    
  ],
  providers: [
    AuthenticationService, 
    EnderecoService,
    AuthGuard,
    FormBuilder
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
