import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

import { FacturegeneralComponent } from "./components/facturegeneral/facturegeneral.component";
import { HomeComponent } from "./components/home/home.component";
import { ListUtentiComponent } from "./components/list-utenti/list-utenti.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { CanActivate } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ClientiComponent } from "./components/clienti/clienti.component";
import { NuoveclientComponent } from "./components/nuoveclient/nuoveclient.component";
import { ModClientComponent } from "./components/mod-client/mod-client.component";
import { DetFacttureComponent } from "./components/det-factture/det-factture.component";
import { FattureClientComponent } from "./components/fatture-client/fatture-client.component";

const routes : Routes =[


   {
        path:'login',
        component : LoginComponent
      },
      {
        path:'signup',
        component : SignupComponent

      },
  {
    path: '',

    component: HomeComponent
  },

  {
    path: 'list-utenti',

    component: ListUtentiComponent,
    canActivate:[AuthGuard],

  },
  {
    path: 'clienti',
    component: ClientiComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'nuoveclient',
    component: NuoveclientComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'mod-client/:id',
    component: ModClientComponent,
    canActivate:[AuthGuard]

  },

  {
    path: 'facturegeneral',
    component: FacturegeneralComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'det-factture/:id',
    component:DetFacttureComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'det-factture/:id/:idCliente',
    component:DetFacttureComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'fatture-client/:id',
    component:FattureClientComponent,
    canActivate:[AuthGuard]

  },






];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],

})
export class AppRputingModule{}
