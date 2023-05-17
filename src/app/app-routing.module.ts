import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AreaUtenteComponent } from './pages/area-utente/area-utente.component';
import { RingraziamentiComponent } from './pages/ringraziamenti/ringraziamenti.component';


const routes: Routes = [
  { path:"", component: HomeComponent  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'area-utente', component: AreaUtenteComponent},
  { path: 'app-ringraziamenti', component: RingraziamentiComponent},
  //fallback, qualsiasi path che non matcha con i precedenti riporta in home
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    // scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
