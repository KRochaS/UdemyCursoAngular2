import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
@NgModule({
	imports: [
		CommonModule
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
