import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-fouteen',
  templateUrl: './step-fouteen.component.html',
  styleUrls: ['./step-fouteen.component.scss']
})
export class StepFouteenComponent {
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
