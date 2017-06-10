import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent, DialogContent } from './pages/home/home.component';
import { DialogComponent } from './shared/dialog/dialog.component';

import { PagesService } from './pages/pages.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogContent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [PagesService],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
