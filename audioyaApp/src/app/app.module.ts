import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormStepsComponent } from './form-steps/form-steps.component';
import { StepOneComponent } from './form-steps/components/step-one/step-one.component';
import { StepTwoComponent } from './form-steps/components/step-two/step-two.component';
import { StepThreeComponent } from './form-steps/components/step-three/step-three.component';
import { StepFourComponent } from './form-steps/components/step-four/step-four.component';
import { StepFiveComponent } from './form-steps/components/step-five/step-five.component';
import { StepSixComponent } from './form-steps/components/step-six/step-six.component';
import { StepSevenComponent } from './form-steps/components/step-seven/step-seven.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StepEightComponent } from './form-steps/components/step-eight/step-eight.component';
import { StepNineComponent } from './form-steps/components/step-nine/step-nine.component';

@NgModule({
  declarations: [
    AppComponent,
    FormStepsComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    StepSixComponent,
    StepSevenComponent,
    FooterComponent,
    HeaderComponent,
    StepEightComponent,
    StepNineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
