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
import { AuthService } from './guards/auth.service';
import { FormsModule } from '@angular/forms';
import { UsuarioModule } from './usuario/usuario.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingsComponent,
    HomeComponent,
    LoginComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UsuarioModule
  ],
  providers: [
    AuthService, 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
