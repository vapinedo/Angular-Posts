import { Component } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( 
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService 
  ) { 
    this.usuario = this.auth.cargarDatosDeUsuario(); 
  }

  cerrarSesion()   {
   if(this.auth.cerrarSesion()) {
      this.router.navigateByUrl('/login');
   } 
   
   else {
      this.toastr.error("Error al cerrar sesión.");
   }
  }

}
