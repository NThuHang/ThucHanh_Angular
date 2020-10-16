import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { HeaderComponent } from './bai1/header/header.component';
import { BodyComponent } from './bai1/body/body.component';
import { FooterComponent } from './bai1/footer/footer.component';
import { Bai2Component } from './bai2/bai2.component';
import { SearchComponent } from './bai2/search/search.component';
import { SharedComponent } from './bai2/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Bai2Component,
    SearchComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
