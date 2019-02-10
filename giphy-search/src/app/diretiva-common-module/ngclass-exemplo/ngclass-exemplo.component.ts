import { Component } from '@angular/core';

@Component({
  selector: 'ngclass-exemplo',
  templateUrl: 'ngclass-exemplo.component.html',
  styleUrls: [ 'ngclass-exemplo.component.css' ]
})
export class NgClassExemploComponent {
 
  dark: boolean = false;
  flat: boolean = false;
}
