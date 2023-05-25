import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.scss']
})
export class StepSixComponent {
  @Output()
  nextStep = new EventEmitter<any>();
  public tipo: string = ""

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setTipo( tipoLeveSevero: string ){
    this.tipo = tipoLeveSevero
    console.log(this.tipo)
  }
}
