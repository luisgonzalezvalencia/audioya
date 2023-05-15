import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormStepsComponent } from './form-steps/form-steps.component';
import { StepOneComponent } from './form-steps/components/step-one/step-one.component';
import { StepTwoComponent } from './form-steps/components/step-two/step-two.component';

@NgModule({
  declarations: [
    AppComponent,
    FormStepsComponent,
    StepOneComponent,
    StepTwoComponent
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
