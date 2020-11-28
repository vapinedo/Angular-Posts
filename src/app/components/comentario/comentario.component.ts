import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComentarioModel } from 'src/app/models/comentario.model';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})

export class ComentarioComponent {

  comentario: ComentarioModel = new ComentarioModel();

  constructor( 
    private comentariosServices: ComentariosService,
    @Inject( MAT_DIALOG_DATA ) public data: { comentarioId: number }
    ) { 
    this.comentariosServices.listarComentario(this.data.comentarioId)
      .subscribe( (comentario:any) => {
        this.comentario = comentario;
      })
  }

}
