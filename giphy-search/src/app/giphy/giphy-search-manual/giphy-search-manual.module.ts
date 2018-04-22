import { GiphySearchListModule } from './../giphy-search-list/giphy-search-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { SharedModuleModule } from '../../shared/shared-module.module';
@NgModule({
	imports: [
		SharedModuleModule,
		GiphySearchListModule
	],
	exports: [
		GiphySearchManualComponent
	],
	declarations: [
		GiphySearchManualComponent
	],

	providers: [
		GiphySearchService //TODO: Sempre necessário importar o serviço
						  // no providers do modulo
	]
})
export class GiphySearchManualComponentModule { }
