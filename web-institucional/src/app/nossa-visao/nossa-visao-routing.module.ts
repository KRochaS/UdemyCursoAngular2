import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { NossaVisaoComponent } from './nossa-visao.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'nossa-visao', component: NossaVisaoComponent }
        ])

    ],
    exports: [

    ]

})
export class NossaVisaoRoutingModule {}