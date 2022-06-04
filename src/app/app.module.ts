import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FacturegeneralComponent } from './components/facturegeneral/facturegeneral.component';
import { AuthModule } from './auth/auth.module';
import { AppRputingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { CommonModule } from '@angular/common';
import { ListUtentiComponent } from './components/list-utenti/list-utenti.component';
import { ClientiComponent } from './components/clienti/clienti.component';
import { NuoveclientComponent } from './components/nuoveclient/nuoveclient.component';
import { ModClientComponent } from './components/mod-client/mod-client.component';
import { DetFacttureComponent } from './components/det-factture/det-factture.component';
import { FattureClientComponent } from './components/fatture-client/fatture-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FacturegeneralComponent,
SignupComponent,
LoginComponent,
ListUtentiComponent,
ClientiComponent,
NuoveclientComponent,
ModClientComponent,
DetFacttureComponent,
FattureClientComponent,






  ],
  imports: [
    BrowserModule,
    AppRputingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,


AuthModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
