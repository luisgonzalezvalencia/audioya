import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-ten',
  templateUrl: './step-ten.component.html',
  styleUrls: ['./step-ten.component.scss']
})
export class StepTenComponent {
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
