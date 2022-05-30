import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Boton1Component } from './components/boton1/boton1.component';
import { Boton2Component } from './components/boton2/boton2.component';
import { Boton3Component } from './components/boton3/boton3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Boton1Component,
    Boton2Component,
    Boton3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
