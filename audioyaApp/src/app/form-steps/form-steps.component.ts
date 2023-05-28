import { Component, OnInit } from '@angular/core';

export enum GRADOPERDIDA {
  LEVE = 'Leve',
  SEVERO = 'Severo'
}

export enum TIPOPERDIDA {
  CONDUCTIVA = 'Conductiva',
  PERCEPTIVA = 'Perceptiva',
  MIXTA = 'Mixta'
}

export interface Informe {
  nombre: string;
  edad: number;
  genero: string;
  gradoPerdida: GRADOPERDIDA,
  tipoPerdida: TIPOPERDIDA,
}

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.scss']
})
export class FormStepsComponent implements OnInit {

  public step: number = 0;

  ngOnInit(): void {
    this.step = 8;
  }

  setNextStep() {
    this.step++;
  }

}
