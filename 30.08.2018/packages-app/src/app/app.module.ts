import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PackageInputComponent } from './components/package-input/package-input.component';
import { TimeRangeInputComponent } from './components/time-range-input/time-range-input.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import {PackageService} from './shared/services/package.service';
@NgModule({
  declarations: [
    AppComponent,
    PackageInputComponent,
    TimeRangeInputComponent,
    PackageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
