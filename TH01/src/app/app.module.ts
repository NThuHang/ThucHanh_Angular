import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai4Component } from './bai4/bai4.component';
import { Bai5Component } from './bai5/bai5.component';
import { Bai7Component } from './bai7/bai7.component';
import { Bai8Component } from './bai8/bai8.component';
import { Bai6Component } from './bai6/bai6.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    Bai4Component,
    Bai5Component,
    Bai7Component,
    Bai8Component,
    Bai6Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
