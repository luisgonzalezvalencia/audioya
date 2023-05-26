import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-eleven',
  templateUrl: './step-eleven.component.html',
  styleUrls: ['./step-eleven.component.scss']
})
export class StepElevenComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
  }

  onNextStep() {
    this.nextStep.emit();
  }
}
