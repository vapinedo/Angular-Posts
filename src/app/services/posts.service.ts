import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private endPoint = 'https://jsonplaceholder.typicode.com';

  constructor( private httpClient: HttpClient ) { }

  listarTodos() {
    return this.httpClient.get(`${ this.endPoint }/posts`);
  }

  listarPost( postId: number ) {
    return this.httpClient.get(`${ this.endPoint }/posts/${ postId }`);
  }

  editarPost( post: PostModel ) {
    return this.httpClient.put(`${ this.endPoint }/posts/${ post.id }`, post);
  }

}