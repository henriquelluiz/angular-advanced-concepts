import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/container/home.component';
import { HomeChieldComponent } from './pages/home/present/home-chield.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeChieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
