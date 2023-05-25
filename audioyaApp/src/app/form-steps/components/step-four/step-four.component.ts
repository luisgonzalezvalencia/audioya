import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent {
  @Output()
  nextStep = new EventEmitter<any>();
  public enfermedades: string = "";

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setEnfermedades(enfermedad: string) {
    this.enfermedades = enfermedad;
    console.log(this.enfermedades)
  }
}
