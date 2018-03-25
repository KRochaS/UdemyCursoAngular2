import { ContatoComponent } from './contato.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'contato', component: ContatoComponent }
        ])

    ],
    exports: [

    ]

})
export class ContatoRoutingModule {}