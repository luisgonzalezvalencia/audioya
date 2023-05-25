import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-eight',
  templateUrl: './step-eight.component.html',
  styleUrls: ['./step-eight.component.scss']
})
export class StepEightComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
    this.nextStep.emit();
  }

  onNextStep() {
    this.nextStep.emit();
  }

}
