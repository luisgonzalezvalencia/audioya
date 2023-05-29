import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-thirteen',
  templateUrl: './step-thirteen.component.html',
  styleUrls: ['./step-thirteen.component.scss']
})
export class StepThirteenComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  public option: string = "";

  constructor() {

  }

  ngOnInit(): void {
  }

  onNextStep() {
    this.nextStep.emit();
  }
}
