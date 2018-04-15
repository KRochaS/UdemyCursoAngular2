import { Injectable } from '@angular/core';

//TODO: Decorator Injectable: Significa que não
// precisa criar uma instância dessa classe
// Só é possível injetar uma classe em um componente
// caso essa classe tenha o decorator.
@Injectable()
export class GiphySearchService {


	// TODO: Evitar criar lógicas de inicialização no construtor
	// no constructor, isso deve ser criado no ngOnInit().
	constructor() {


	}


	pesquisarGiphy(limit: string, term: string): void {
		console.log('Pesquisar giphy foi chamado');

	}
}
