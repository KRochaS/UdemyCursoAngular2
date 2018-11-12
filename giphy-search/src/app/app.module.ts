import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GiphySearchManualComponentModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { AppRoutingModule } from './app-routing.module';
import { ContatoModule } from './contato/contato.module';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		GiphySearchManualComponentModule,
		ContatoModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
