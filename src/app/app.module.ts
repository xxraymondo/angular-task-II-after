import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { HomeComponent } from './home/home.component';
import { AllQoutesComponent } from './qoutes/all-qoutes/all-qoutes.component';
import { SingleQouteComponent } from './qoutes/single-qoute/single-qoute.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent,
    HomeComponent,

    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
