import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//TODO: Decorator Injectable: Significa que não
// precisa criar uma instância dessa classe
// Só é possível injetar uma classe em um componente
// caso essa classe tenha o decorator.
@Injectable()
export class GiphySearchService {


	// TODO: Evitar criar lógicas de inicialização no construtor
	// no constructor, isso deve ser criado no ngOnInit().
	constructor(private http: Http) {


	}


	pesquisarGiphy(limit: string, term: string): Observable<Response> {
		const url = 'https://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC&limit=' + limit;
		return this.http.get(url);
	}
}
