import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {
  cardTitle: string | null = "Create a new User"
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      first_name: ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      last_name: ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      email: ['', [
        Validators.required,
        Validators.maxLength(255),
        Validators.minLength(3),
        Validators.email
      ]
      ],
      other_name: [null, Validators.required,],

      phone_number: [null, Validators.required],
      revenue_pin: [null, Validators.required],
      loan_limit: [null, Validators.required],
      staff_no: [null, Validators.required],
      national_id: [null, Validators.required]

    })
  }
  uploadEmployee() {

  }
  downloadTemplate() {
    window.open('/assets/employee_upload.xlsx');
  }

  ngOnInit(): void {

  }
  onSubmit(form: any) {

  }
  close() {
    this.router.navigate(['employees/manage'])
  }

}
