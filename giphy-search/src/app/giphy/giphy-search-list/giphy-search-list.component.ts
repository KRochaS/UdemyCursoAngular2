import { Component, OnInit, Input } from '@angular/core';
import { Giphy } from '../giphy-search-manual/giphy.type';

@Component({
	selector: 'app-giphy-search-list',
	templateUrl: './giphy-search-list.component.html',
	styleUrls: ['./giphy-search-list.component.css']
})
export class GiphySearchListComponent implements OnInit {

	// @Input: permitir a comunicação de um outro componente com este componente
	@Input('gifz') // input recebe gifsList como atribulo [gifsz]="gifs"
	gifsList: Giphy[] = [];

	constructor() { }

	ngOnInit() {
	}

}
