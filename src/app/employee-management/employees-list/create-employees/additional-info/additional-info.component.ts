import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from 'src/app/modules/wizards/create-account.helper';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {
  @Input('updateParentModel') updateParentModel: (part: Partial<ICreateAccount>, isFormValid: boolean ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;
  private unsubscribe: Subscription[] = [];

  @Input() formGroupName: string;
  constructor( 
    private formBuilder: FormBuilder,
    private rootFormGroup: FormGroupDirective
  ) {  }
  ngOnInit(): void {
    this.form = this.rootFormGroup.control?.get(this.formGroupName) as FormGroup;
  }
  onSubmit(formData: any){

  }

}
