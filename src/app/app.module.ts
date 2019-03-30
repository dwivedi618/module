import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';



import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceLoginComponent } from './service-login/service-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { SlidenavComponent } from './dashboard/slidenav/slidenav.component';



const appRoutes:Routes = [
  { path: 'login' , component : ServiceLoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceLoginComponent,
    DashboardComponent,
    NavigationComponent,
    SlidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
   
    
    
    
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
