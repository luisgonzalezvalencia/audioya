import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Informe } from '../../form-steps.component';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent {
  @Output()
  nextStep = new EventEmitter<any>();
  
  @Input()
  resumen: Partial<Informe> = {};

  constructor(){

  }

  onNextStep() {
    this.nextStep.emit();
  }

  disabled(): boolean{
    return this.resumen.protesisSeleccionada === undefined;
  }

}
