import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from 'src/app/modules/wizards/create-account.helper';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;
  // form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;
  private unsubscribe: Subscription[] = [];
  cardTitle: string | null = "Create a new employee"
  form: FormGroup;
  @Input() formGroupName: string;
  constructor(
    private rootFormGroup: FormGroupDirective
  ) {
    
   }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control?.get(this.formGroupName) as FormGroup;
  }
  onSubmit(formData: any){

  }

}
