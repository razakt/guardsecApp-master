import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { DocumentPageComponent } from './document-page/document-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { EmailService } from './email.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';
import { AlertModule } from './_alert';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DocumentPageComponent,
    HomePageComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertModule,
    FormsModule    
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
