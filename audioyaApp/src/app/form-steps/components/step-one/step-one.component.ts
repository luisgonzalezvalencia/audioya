import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  @Output()
  nextStep = new EventEmitter<any>();

  public nombre: string = "";
  public edad: number | undefined;
  public genero: string = "";

  constructor() {

  }

  ngOnInit(): void {
    this.nombre = "";
    this.edad = undefined;
    this.genero = "";
  }

  onNextStep() {
    console.log(this.nombre + " " + this.edad + " " + this.genero);
    this.nextStep.emit({
      nombre: this.nombre,
      edad: this.edad,
      genero: this.genero
    })
  }


}
