import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import {
  AppComponent,
  RegisterComponent,
  UserListComponent,
  UserService,
  CountryService
} from './imports';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
