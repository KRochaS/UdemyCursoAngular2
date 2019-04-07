import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { ContatoModule } from './contato/contato.module';
import { BemVindoModule } from './bem-vindo/bem-vindo.module';





@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    QuemSomosModule,
    ContatoModule,
    BemVindoModule,
  ],
  providers: [BemVindoModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
