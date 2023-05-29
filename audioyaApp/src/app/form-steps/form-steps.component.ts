import { Component, OnInit } from '@angular/core';

export enum GRADOPERDIDA {
  LEVESEVERA = 'Leve o Severa',
  MODERADA = 'Moderada',
  ALTASFRECUENCIAS = 'Altas Frecuencias'
}

export enum TIPOPERDIDA {
  CONDUCTIVA = 'Conductiva',
  PERCEPTIVA = 'Perceptiva',
  MIXTA = 'Mixta'
}

export enum ENFERMEDADES {
  CONGENITAS = 'Congénitas',
  PREEXISTENTES = 'Pre-existentes',
  NO = 'No presenta'
}


export interface Informe {
  nombre: string;
  edad: number;
  genero: string;
  gradoPerdida: GRADOPERDIDA,
  tipoPerdida: TIPOPERDIDA,
  enfermedadesPre: ENFERMEDADES
}

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.scss']
})
export class FormStepsComponent implements OnInit {

  public step: number = 0;

  ngOnInit(): void {
    this.step = 1;
  }

  setNextStep() {
    this.step++;
  }

}
