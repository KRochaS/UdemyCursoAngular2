import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';

@Component({
	selector: 'app-giphy-search-manual',
	templateUrl: './giphy-search-manual.component.html',
})

// TODO: Injetando o serviço no construtor
export class GiphySearchManualComponent {
	constructor(private giphySearchService: GiphySearchService) {

	}

	OnInit() {

	}

	// TODO: Método pesquisarGiphy chama o método que esta no serviço
	// passando por parametro duas strings.
	pesquisarGiphy() {
		this.giphySearchService.pesquisarGiphy('','')
	}

}

