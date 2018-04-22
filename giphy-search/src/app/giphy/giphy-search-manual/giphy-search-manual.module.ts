import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule
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
