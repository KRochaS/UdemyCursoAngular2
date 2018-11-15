import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const host = 'http://beta.mrest.io'

@Injectable()
export class ContatoComponentService {
	constructor(private http: HttpClient) {

  }

  enviarContato(contatoForm: any): Observable<any> {
	let nome = contatoForm.nome;
	let email = contatoForm.email;
	let mensagem = contatoForm.contato.mensagem;


	  return this.http.post(host, { email: email, from: nome, message: mensagem }, { headers: new HttpHeaders(
          {
            key: "demo",
            Origin: "http://localhost:4200/",
            "content-type": "application/json"
          }
        ) });
  }
}
