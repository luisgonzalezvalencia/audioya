import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent {
  @Output()
  nextStep = new EventEmitter<any>();
  public perdida: string = ""

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setPerdida( nivelPerdida: string ){
    this.perdida = nivelPerdida
    console.log(this.perdida)
  }
}
