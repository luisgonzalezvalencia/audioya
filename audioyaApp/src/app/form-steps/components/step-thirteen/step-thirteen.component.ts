import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-thirteen',
  templateUrl: './step-thirteen.component.html',
  styleUrls: ['./step-thirteen.component.scss']
})
export class StepThirteenComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  public option: string = "";

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
