import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';



import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceLoginComponent } from './service-login/service-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { SlidenavComponent } from './dashboard/slidenav/slidenav.component';
import { QuestionComponent } from './question/question.component';
import { AvatarComponent } from './dashboard/avatar/avatar.component';
import { SlidenavListComponent } from './dashboard/slidenav/slidenav-list/slidenav-list.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SearchComponent } from './dashboard/navigation/search/search.component';



const appRoutes:Routes = [
  { path: '' , component : DashboardComponent },
  { path: 'login' , component : ServiceLoginComponent },
  { path: 'question', component : QuestionComponent },
  { path: 'preloader', component : PreloaderComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ServiceLoginComponent,
    DashboardComponent,
    NavigationComponent,
    SlidenavComponent,
    QuestionComponent,
    AvatarComponent,
    SlidenavListComponent,
    PreloaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
   
    
    
    
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
