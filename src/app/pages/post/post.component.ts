import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/posts.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post: PostModel = new PostModel();

  constructor( 
    private router: Router,
    private toastr: ToastrService,
    private postService: PostService, 
    private activatedRoute: ActivatedRoute
  ) { 

    this.activatedRoute.params.subscribe( params => {
      this.postService.listarPost(params['id'])
        .subscribe( (post:any) => this.post = post );
    });
  }

  submit( form: NgForm ) {

    if ( form.invalid ) { 
      return; 
    }

    this.postService.editarPost( this.post )
      .subscribe( respuesta => {
        this.toastr.success('Post actualizado con exito.');
        this.router.navigateByUrl('/posts');
      }, err => {
        this.toastr.error('Error al actualizar post.');
      });
  }

}
