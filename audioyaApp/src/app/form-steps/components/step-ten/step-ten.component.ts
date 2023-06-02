import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-ten',
  templateUrl: './step-ten.component.html',
  styleUrls: ['./step-ten.component.scss']
})
export class StepTenComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {}

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();

  constructor() {

  }

  ngOnInit(): void {
  }

  onNextStep() {
    this.nextStep.emit();
  }

  disabled(): boolean{
    return this.resumen.protesisSeleccionada === undefined;
  }
}
