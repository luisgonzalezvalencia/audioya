import {  Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  public grado: string = "";

  constructor() {

  }

  ngOnInit(gr: string): void {
    this.grado = gr;
  }

  onNextStep() {
    console.log(this.grado);
  }
}
