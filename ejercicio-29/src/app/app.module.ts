import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Libro1Component } from './components/libro1/libro1.component';
import { Libro2Component } from './components/libro2/libro2.component';
import { Libro3Component } from './components/libro3/libro3.component';

@NgModule({
  declarations: [
    AppComponent,
    Libro1Component,
    Libro2Component,
    Libro3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
