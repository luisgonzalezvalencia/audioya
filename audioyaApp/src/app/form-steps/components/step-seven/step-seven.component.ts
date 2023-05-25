import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-seven',
  templateUrl: './step-seven.component.html',
  styleUrls: ['./step-seven.component.scss']
})
export class StepSevenComponent {
  @Output()
  nextStep = new EventEmitter<any>();
  public malformacion: string = ""

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setMalformacion( malformaciones: string ){
    this.malformacion = malformaciones
    console.log(this.malformacion)
  }
}
