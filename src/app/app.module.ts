import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { WorksPageComponent } from './works-page/works-page.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    AppComponent, 
    HomePageComponent, 
    HeaderComponent, 
    AboutPageComponent, 
    ServicesPageComponent, 
    ContactPageComponent, 
    WorksPageComponent, FooterComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
