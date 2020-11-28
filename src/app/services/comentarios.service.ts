import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private endPoint = 'https://jsonplaceholder.typicode.com';

  constructor( private httpClient: HttpClient ) { }

  listarComentariosDePost( postId: number ) {
    return this.httpClient.get(`${ this.endPoint }/comments?postId=${ postId }`);
  }

  listarComentario( id: number ) {
    return this.httpClient.get(`${ this.endPoint }/comments/${ id }`);
  }  

}
