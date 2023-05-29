import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-twelve',
  templateUrl: './step-twelve.component.html',
  styleUrls: ['./step-twelve.component.scss']
})
export class StepTwelveComponent {
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
