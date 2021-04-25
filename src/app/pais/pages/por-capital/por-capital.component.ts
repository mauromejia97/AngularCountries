import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false;
  capital: Country[] = []

  constructor(private paisServise: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;

    this.termino = termino

    console.log(this.termino);

    this.paisServise.buscarCapital(termino)
      .subscribe((paises) => {
        this.capital = paises;
        /* console.log(this.capital); */
      }, (err) => {
        this.hayError = true;
        this.capital = []
      });
  }
  sugerencias(termino: string) {
    this.hayError = false
  }

}
