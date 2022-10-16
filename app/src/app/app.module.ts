import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboveComponent } from './above/above.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

const appRoute:Routes =
[
  { path:'',component:HomeComponent},
  { path:'home', component:HomeComponent },
  { path:'about', component:AboveComponent },
  { path:'contact', component:ContactComponent },
  { path:'services', component:ServicesComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboveComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
