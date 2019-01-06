import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GiphySearchManualComponentModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { AppRoutingModule } from './app-routing.module';
import { ContatoModule } from './contato/contato.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from "././pagenotfound/pagenotfound.component";
import { GiphySearchAutoComponent } from './giphy/giphy-search-manual/giphy-search-auto/giphy-search-auto.component';
import { GiphySearchAutoRoutingModule } from './giphy/giphy-search-manual/giphy-search-auto/giphy-search-auto-routing.module';



@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, GiphySearchAutoComponent],
  imports: [
    BrowserModule,
    GiphySearchManualComponentModule,
    GiphySearchAutoRoutingModule,
    ContatoModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
