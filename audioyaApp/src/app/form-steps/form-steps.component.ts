import { Component, OnInit } from '@angular/core';

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

  nextStep() {
    this.step++;
  }

}
