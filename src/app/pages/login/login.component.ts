import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService
  ) { }  

  acceder( form: NgForm ) {

    if ( form.invalid ) { 
      this.toastr.error("Usuario y/o contraseñas inválidos.");
      return;
    }

    if (this.auth.login( this.usuario )) {
      this.router.navigateByUrl('/posts');
    } else {
      this.toastr.error("Usuario y/o contraseñas inválidos.");
    }
  }   

}
