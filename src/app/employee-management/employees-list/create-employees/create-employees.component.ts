import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ICreateAccount, inits } from 'src/app/modules/wizards/create-account.helper';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.scss']
})
export class CreateEmployeesComponent implements OnInit {
  formsCount = 4;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  account$: BehaviorSubject<ICreateAccount> =
    new BehaviorSubject<ICreateAccount>(inits);
  currentStep$: BehaviorSubject<number> = new BehaviorSubject(1);
  isCurrentFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private unsubscribe: Subscription[] = [];
  employeesForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeesForm = this._formBuilder.group({
      personalForm: this._formBuilder.group({
        first_name: ['', [
          Validators.required,
          Validators.maxLength(100)
        ]],
        last_name: ['', [
          Validators.required,
          Validators.maxLength(100)
        ]],
        other_name: [null, Validators.required,],
        gender: [null, Validators.required],
        dob: [null, Validators.required],
        staff_no: [null, Validators.required],
        national_id: [null, Validators.required]
      }),
      //CONTACT FORM
      contactForm: this._formBuilder.group({
        phone_number: [null, Validators.required],
        phone_number2: [null, Validators.required],
        email: [null, Validators.required],
        office_mail: [null, Validators.required]
      }),
      //ADDITIONAL INFO
      additionalForm: this._formBuilder.group({
        registration_date: [null, Validators.required],
        status: [null, Validators.required],
        branch: [null, Validators.required],
        loan_limit: [null, Validators.required],
        loan_product: [null, Validators.required]

      })


    })
  }
  stepNext(stepper: MatStepper) {
    stepper.next();
  }
  onSubmit(formValues: Object){
    console.log(formValues);
    
  }
  updateAccount = (part: Partial<ICreateAccount>, isFormValid: boolean) => {
    const currentAccount = this.account$.value;
    const updatedAccount = { ...currentAccount, ...part };
    this.account$.next(updatedAccount);
    this.isCurrentFormValid$.next(isFormValid);
  };

  nextStep() {
    const nextStep = this.currentStep$.value + 1;
    if (nextStep > this.formsCount) {
      return;
    }
    this.currentStep$.next(nextStep);

    console.log(this.currentStep$.value);

  }

  prevStep() {
    const prevStep = this.currentStep$.value - 1;
    if (prevStep === 0) {
      return;
    }
    this.currentStep$.next(prevStep);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
  uploadEmployee() {

  }
  downloadTemplate() {

  }
}
