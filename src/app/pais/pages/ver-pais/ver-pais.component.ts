import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;



  constructor(private acivatedRoute: ActivatedRoute, private paisService: PaisService) {

  }

  ngOnInit(): void {

    // --- SEGUNDA FORMA USANDO EL SWITCHMAP ---
    this.acivatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log) /* EL TAP DISPARA UN EFECTO SECUNDARIO */
      ).subscribe(pais => {
        this.pais = pais;
      })


    /* ---PRIMERA FORMA DE HACERLO--- 
    this.acivatedRoute.params
      .subscribe(({ id }) => {
        console.log(id);
        this.paisService.getPaisPorCodigo(id)
          .subscribe(pais => {
            console.log(pais);
          })
      })
 */
  }

}
