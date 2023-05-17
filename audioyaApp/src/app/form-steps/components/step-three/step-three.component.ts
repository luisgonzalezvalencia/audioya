import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  public zona: string = "";

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    console.log(this.zona);
    this.nextStep.emit();
  }

  setZona(zn: string) {
    this.zona = zn;
    console.log(this.zona);
  }
}

