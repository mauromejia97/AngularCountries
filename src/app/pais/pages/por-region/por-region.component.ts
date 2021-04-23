import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {


  termino: string = "";
  hayError: boolean = false;
  region: Country[] = []

  constructor(private paisServise: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;

    this.termino = termino

    console.log(this.termino);

    this.paisServise.buscarRegion(termino)
      .subscribe((paises) => {
        this.region = paises;
     /*    console.log(this.region); */
      }, (err) => {
        this.hayError = true;
        this.region = []
      });
  }
  sugerencias(termino: string) {
    this.hayError = false
  }
}
