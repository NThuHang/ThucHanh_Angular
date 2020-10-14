import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { HeaderComponent } from './bai1/header/header.component';
import { BodyComponent } from './bai1/body/body.component';
import { FooterComponent } from './bai1/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
