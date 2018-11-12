import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModuleModule } from "../shared/shared-module.module";
import { ContatoComponent } from "./contato.component";
import { ContatoRoutingModule } from "./contato-routing.module";

@NgModule({
  imports: [SharedModuleModule, ContatoRoutingModule],
  declarations: [ContatoComponent]
})
export class ContatoModule {}
