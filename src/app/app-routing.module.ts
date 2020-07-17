import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Team } from './models/team';
import { SignupComponent } from './components/signup/signup.component';
import { TeamComponent } from './components/team/team.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AchivementComponent } from './components/achivement/achivement.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const routes: Routes = [
  {path:'organistaion',component:OrganisationComponent},
  {path:'Achivements',component:AchivementComponent},
  {path:'Signup',component:HomeComponent},

  {path:'Team',component:HeaderComponent},
  {path:'feedback',component:CustomerComponent},
  {
    path: 'login',
    component: LoginComponent  
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
