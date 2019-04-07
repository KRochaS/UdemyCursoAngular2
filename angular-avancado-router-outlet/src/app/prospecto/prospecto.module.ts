
import { NgModule } from '@angular/core';
import { ProspectoComponent } from './prospecto.component';

import { RouterModule } from '@angular/router';
import { ProspectoRoutingModule } from './prospecto-routing.module';
import { PessoaComponent } from './pessoa/pessoa.component';
import { EnderecoComponent } from './endereco/endereco.component';


@NgModule({
  imports: [RouterModule, ProspectoRoutingModule],
  exports: [],
  declarations: [ProspectoComponent, PessoaComponent, EnderecoComponent],
  providers: [],
})
export class ProspectoModule {
}