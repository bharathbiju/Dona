import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './shared/customer.service';
import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { TeamComponent } from './components/team/team.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { AchivementComponent } from './components/achivement/achivement.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';


import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TeamComponent,
    OrganisationComponent,
    AchivementComponent,
    SignupComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
  ],
  providers: [CustomerService ,  AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
