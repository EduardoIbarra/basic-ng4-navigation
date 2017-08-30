import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {RouterModule, Routes} from "@angular/router";
export const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      ContactoComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
