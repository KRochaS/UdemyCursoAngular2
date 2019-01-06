import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';
import { Giphy } from './giphy.type';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-giphy-search-manual',
	templateUrl: './giphy-search-manual.component.html',
})

// TODO: Injetando o serviço no construtor
export class GiphySearchManualComponent {

	gifs: Giphy[] = [];
	limit: string;
	term: string;

	constructor(private giphySearchService: GiphySearchService, protected title: Title) {

	}


	ngOnInit() {
		this.title.setTitle('Giphy Search Manual');
	}

	// TODO: Método pesquisarGiphy chama o método que esta no serviço
	// passando por parametro duas strings.
	// Método subscribe vai provocar a execução do HTTP
	// e receber a resposta que é um Response
	// provocar a execução assincrona
	pesquisarGiphy() {
		this.giphySearchService.pesquisarGiphy(this.limit, this.term)
		.subscribe((response: Response) => this.gifs = response.json().data);
		// TODO: como tem apenas uma requisição não é necessário {
		// .subscribe((response: Response) => {
		// 	this.gifs = response.json().data;
		// });
	}


}

