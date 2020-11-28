import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario = 'admin';
  private contrasenia = 'admin';

  constructor() {}

  login( usuario: UsuarioModel ): boolean {
    if (this.usuarioEsValido( usuario )) {
      localStorage.setItem('datosDelUsuario', JSON.stringify( usuario ));  
      return true;
    }
    return false;
  }

  cerrarSesion(): boolean {
    if ( localStorage.getItem('datosDelUsuario') ) {
      localStorage.removeItem('datosDelUsuario');
      return true;
    }
    return false;
  }

  estaAutenticado(): boolean {
    if ( localStorage.getItem('datosDelUsuario') ) {
      const usuario = JSON.parse( localStorage.getItem('datosDelUsuario') || '{}' );
      return this.usuarioEsValido( usuario ) ? true : false;
    }
    return false;
  }

  usuarioEsValido( usuario: UsuarioModel ): boolean {
    if ( usuario.usuario === this.usuario && usuario.contrasenia === this.contrasenia ) {
      return true;
    }
    return false;
  }

  cargarDatosDeUsuario(): UsuarioModel {
    if ( localStorage.getItem('datosDelUsuario') ) {
      const usuario = JSON.parse( localStorage.getItem('datosDelUsuario') || '{}' );
      return usuario;
    }
    let usuario: UsuarioModel = new UsuarioModel();
    return usuario;
  }

}