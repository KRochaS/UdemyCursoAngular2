import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot([
      // colocar rotas lazy loading
      // carregadas a medida que for necessário
    ])
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
