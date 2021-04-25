import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right:10px
    }`
  ]
})
export class PorRegionComponent {

  constructor(private paisServise: PaisService) { }

  region: Country[] = []
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = ''

  activarRegion(region: string) {

    if (region === this.regionActiva) {
      return
    }

    this.regionActiva = region
    this.paisServise.buscarRegion(region)
      .subscribe((regiones) => {
        this.region = regiones;
      })
  }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? ' btn btn-primary' : 'btn btn-outline-primary'
  }

}
