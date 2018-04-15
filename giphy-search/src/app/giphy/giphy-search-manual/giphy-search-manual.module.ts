import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { HttpModule } from '@angular/http';
@NgModule({
	imports: [
		CommonModule,
		HttpModule
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
