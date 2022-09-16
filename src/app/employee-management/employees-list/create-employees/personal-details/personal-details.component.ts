import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICreateAccount } from 'src/app/modules/wizards/create-account.helper';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  @Input() formGroupName: string;
  form: FormGroup;
  private unsubscribe: Subscription[] = [];
  cardTitle: string | null = "Create a new employee"
  formValues: any;
  dateFormat = 'yyyy/MM/dd';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rootFormGroup: FormGroupDirective
  ) {
  
  }  
  ngOnInit(): void {
    this.form = this.rootFormGroup.control?.get(this.formGroupName) as FormGroup;
  }
  uploadEmployee() {

  }
  downloadTemplate() {
    window.open('/assets/employee_upload.xlsx');
  }


  onSubmit(form: any) {
    this.formValues = form.value
  }
  close() {
    this.router.navigate(['employees/manage'])
  }
}


