import { Component, OnInit } from '@angular/core';

export enum GRADOPERDIDA {
  LEVEMODERADA = 'Leve o Moderada',
  LEVESEVERA = 'Leve o Severa',
  MODERADA = 'Moderada',
  PROFUNDA = 'Profunda',
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
  public resumen: Partial<Informe> = {
    nombre: '',
    genero: ''
  };

  ngOnInit(): void {
    this.step = 1;
  }

  setNextStep() {
    console.log(this.resumen);
    //gestionamos la logica entre los distintos pasos.
    //paso 3 el camino cambia segun el rango etario y nivel de perdida

    //si el grado es LEVEMODERADA y es menor de edad, vamos al step 4
    if (this.step == 3 && this.resumen.edad && this.resumen.edad < 18 && this.resumen.gradoPerdida == GRADOPERDIDA.LEVEMODERADA) {
      this.step = 4; //saltamos al paso 4
      return;
    }

    //si el grado es LEVEMODERADA y es mayor de edad, vamos al step 5
    if (this.step == 3 && this.resumen.edad && this.resumen.edad >= 18 && this.resumen.gradoPerdida == GRADOPERDIDA.LEVEMODERADA) {
      this.step = 5; //saltamos al paso 5
      return;
    }
    
    //si el grado es PROFUNDA y es menor o mayor de edad, vamos al step 3
    if (this.step == 3 && this.resumen.edad && this.resumen.edad >= 18 || this.resumen.edad && this.resumen.edad < 18 && this.resumen.gradoPerdida == GRADOPERDIDA.PROFUNDA) {
      this.step = 7; //saltamos al paso 7
      return;
    } 

    //en step 4, si hay enfermedades congénitas, vamos al step 8 "DIADEMAS VO"
    if (this.step == 4 && this.resumen.enfermedadesPre == ENFERMEDADES.CONGENITAS) {
      this.step = 8; //saltamos al paso 8
      return;
    } 

    // en step 4, si hay enfermedades preexistentes o no hay, vamos al step 10 "RETROAURICULAR"
    if (this.step == 4 && this.resumen.enfermedadesPre == ENFERMEDADES.NO || this.resumen.enfermedadesPre == ENFERMEDADES.PREEXISTENTES) {
      this.step = 10; //saltamos al paso 10
      return;
    } 

    // en step 5, si es LEVESEVERA vamos al step 6
    if (this.step == 5 && this.resumen.gradoPerdida == GRADOPERDIDA.LEVESEVERA) {
      this.step = 6; //saltamos al paso 6
      return;
    } 

    // en step 5, si es MODERADA vamos al step 12
    if (this.step == 5 && this.resumen.gradoPerdida == GRADOPERDIDA.MODERADA) {
      this.step = 12; //saltamos al paso 12
      return;
    } 
  
    // en step 5, si es ALTASFRECUENCIAS vamos al step 9
    if (this.step == 5 && this.resumen.gradoPerdida == GRADOPERDIDA.ALTASFRECUENCIAS) {
      this.step = 9; //saltamos al paso 9
      return;
    } 

    this.step++;
    return;
  }

}
