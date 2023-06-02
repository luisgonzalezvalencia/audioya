import { Component, Input } from '@angular/core';
import { Informe } from '../../form-steps.component';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent {

  @Input()
  resumen: Partial<Informe> = {};

  constructor(){

  }


}
