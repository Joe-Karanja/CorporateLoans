import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-corporates',
  templateUrl: './create-corporates.component.html',
  styleUrls: ['./create-corporates.component.scss']
})
export class CreateCorporatesComponent implements OnInit {
  form: FormGroup;
  cardTitle: string = "create company"
  image: any;
  public file: File;
  arrayImage: any = [];
  base64ImageArray: any = [];
  @ViewChild('fileInput') fileInput: ElementRef;
  citizenshipDetails: any;
  add_image: any[];
  base64image: any;
  listed_image: number;
  base64imageFormat: any;
  public loading = false;
  public hasErrors = false;
  public errorMessages: string;


  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({

      name: ['', [Validators.required]],
      company_reg: ['', [Validators.required]],
      postal_address: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      email_address: ['', [Validators.required]],
      kra_pin: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      account_number: ['', [Validators.required]],
    });

  }
  public processFile(imageInput: any): void {

    this.arrayImage.push(imageInput);
    console.log("Image Array", this.arrayImage);
    //Store 
    this.showPreview();
    //console.log(imageInput);
    //let liste = this.add_image.push(imageInput)
    // console.log(liste);


  }
  public showPreview() {
    const reader = new FileReader();
    for (let x = 0; x < this.arrayImage.length; x++) {
      if (this.arrayImage[x].files.length) {
        this.file = this.arrayImage[x].files[0];
        reader.onload = () => {
          let img: any = {};
          this.image = reader.result;
          let base = this.image.split(',')[1];
          img['image'] = base;
          this.base64ImageArray.push(img);
          console.log(this.base64ImageArray);
        };
        reader.readAsDataURL(this.file);
        reader.DONE;
      }
    }
  }
  removeImage(): void {
    this.image = '';
  }
  close(){
    this.router.navigate(['corporates/manage'])
  }


}
