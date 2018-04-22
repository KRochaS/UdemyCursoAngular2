import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule
	],
	exports: [
		CommonModule,
		FormsModule
	],
	declarations: [

	]
})

// shared-module usado para importar e exportar modulos comuns a todos os modulos
// sem precisar da repetição deles em outros modulos
// invés de importar várias vezes os módulos, importa apenas o sharedModule
export class SharedModuleModule { }
