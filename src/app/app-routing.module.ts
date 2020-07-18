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
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';


const routes: Routes = [
  {path:'organistaion',component:ImageComponent},
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
  { path: 'organistaion/upload', component: ImageComponent },
  { path: 'organistaion/list', component: ImageListComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
