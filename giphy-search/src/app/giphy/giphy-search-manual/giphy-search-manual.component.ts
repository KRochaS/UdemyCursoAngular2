import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';

@Component({
	selector: 'app-giphy-search-manual',
	templateUrl: './giphy-search-manual.component.html',
})

// TODO: Injetando o serviço no construtor
export class GiphySearchManualComponent {

	gifs: any[] = [];
	constructor(private giphySearchService: GiphySearchService) {

	}

	OnInit() {

	}

	// TODO: Método pesquisarGiphy chama o método que esta no serviço
	// passando por parametro duas strings.
	// Método subscribe vai provocar a execução do HTTP
	// e receber a resposta que é um Response
	// provocar a execução assincrona
	pesquisarGiphy() {
		this.giphySearchService.pesquisarGiphy('2','good')
		.subscribe((response: Response) => this.gifs = response.json().data);
		// TODO: como tem apenas uma requisição não é necessário {
		// .subscribe((response: Response) => {
		// 	this.gifs = response.json().data;
		// });
	}


}

