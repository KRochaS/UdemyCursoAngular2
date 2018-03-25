import { QuemSomosComponent } from './quem-somos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'quem-somos', component: QuemSomosComponent }
        ])

    ],
    exports: [

    ]

})
export class QuemSomosRoutingModule {}