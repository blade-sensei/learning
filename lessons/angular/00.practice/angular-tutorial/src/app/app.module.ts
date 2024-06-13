import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeFirstValueComponent } from './components/home-first-value/home-first-value.component';

@NgModule({
  //ajout des components / directives / pipes pour composer le Module et que chaque composant se connaisse
  declarations: [
    AppComponent,
    HeroComponent,
    HomeFirstValueComponent,
  ],

  //import ce qui est exportable depuis les modules, des components / services / etc
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  //injection des services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
