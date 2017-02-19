import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { AppComponent }  from './app.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {routes} from './app.route';


@NgModule({
  imports:      [ BrowserModule ,FormsModule, CommonModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent , HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
