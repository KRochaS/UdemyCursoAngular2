import { Component, OnInit } from '@angular/core';
import { GiphySearchManualComponent } from '../giphy-search-manual.component';
import { GiphySearchService } from '../../giphy-search.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'giphy-search-auto',
  templateUrl: './giphy-search-auto.component.html',
  styleUrls: ['./giphy-search-auto.component.css']
})
export class GiphySearchAutoComponent extends GiphySearchManualComponent implements OnInit {

  constructor(giphySearchService: GiphySearchService, protected title: Title) {
	  super(giphySearchService, title);
   }

  ngOnInit() {
    this.title.setTitle('Giphy Search Auto');
  }

}
