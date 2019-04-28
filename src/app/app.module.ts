import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent } from './app.component';
import { HashBucketComponent } from './hash-bucket/hash-bucket.component';

@NgModule({
  declarations: [
    AppComponent,
    HashBucketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
