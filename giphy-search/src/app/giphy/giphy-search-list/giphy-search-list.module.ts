import { NgModule } from '@angular/core';
import { GiphySearchListComponent } from './giphy-search-list.component';
import { SharedModuleModule } from '../../shared/shared-module.module';

@NgModule({
	imports: [
		SharedModuleModule
	],
	exports: [
		GiphySearchListComponent // 2º exporta o componente para ele ser usado fora desse módulo
	],
	declarations: [
		GiphySearchListComponent // 1º declara o componente no modulo
	]
})
export class GiphySearchListModule { }
