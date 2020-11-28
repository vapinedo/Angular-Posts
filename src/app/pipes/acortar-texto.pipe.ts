import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acortarTexto'
})
export class AcortarTextoPipe implements PipeTransform {

  transform(texto: string, caracteres: number): string {
    if ( texto.length > caracteres ) {
      return texto.slice(0, caracteres) + '...';
    }
    return texto;
  }

}
