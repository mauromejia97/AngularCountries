import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = []

  constructor(private paisServise: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;

    this.termino = termino

    console.log(this.termino);

    this.paisServise.buscarPais(termino)
      .subscribe((paises) => {
        this.paises = paises;
        /* console.log(this.paises); */
      }, (err) => {
        this.hayError = true;
        this.paises = []
      });
  }
  sugerencias(termino: string) {
    this.hayError = false
  }

}
