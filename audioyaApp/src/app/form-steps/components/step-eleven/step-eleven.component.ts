import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-eleven',
  templateUrl: './step-eleven.component.html',
  styleUrls: ['./step-eleven.component.scss']
})
export class StepElevenComponent {
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
}
