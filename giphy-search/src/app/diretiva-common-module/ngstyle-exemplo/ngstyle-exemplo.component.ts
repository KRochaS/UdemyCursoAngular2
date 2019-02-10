import { Component } from '@angular/core';

@Component({
  selector: 'ngstyle-exemplo',
  templateUrl: 'ngstyle-exemplo.component.html',
  styleUrls: [ 'ngstyle-exemplo.component.css' ]
})
export class NgStyleExemploComponent {

  cor: string = 'blue';

  borderStyle: string = '1px solid #0000';


  styles = {
    'color': 'yellow',
    'font-weight': 'bold',
    'border-bottom': '1px solid #0000'
  }
}
