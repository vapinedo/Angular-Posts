import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'; 
import { MatDialog } from '@angular/material/dialog';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { PostService } from 'src/app/services/posts.service';
import { ComentarioComponent } from 'src/app/components/comentario/comentario.component';
import { PostModel } from 'src/app/models/post.model';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {

  post: PostModel = new PostModel;

  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'idDuplicado'];

  constructor( 
    public dialog: MatDialog,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private comentariosServices: ComentariosService
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.comentariosServices.listarComentariosDePost(params['postId'])
        .subscribe((comentarios: any) => {

          // duplicar el id del comentario para usar 2 veces en mat-table
          for ( let i=0; i<comentarios.length; i++ ) {
            comentarios[i].idDuplicado = comentarios[i].id;
          }

          this.dataSource = new MatTableDataSource(comentarios);  

          this.postService.listarPost( params['postId'] )
            .subscribe( (post:any) => this.post = post );
        });
    });
  }

  verComentario( comentarioId: number ) {
    this.dialog.open(ComentarioComponent, {
      height: '400px',
      width: '600px',      
      data: {
        comentarioId: comentarioId
      }
    });
  }  

}
