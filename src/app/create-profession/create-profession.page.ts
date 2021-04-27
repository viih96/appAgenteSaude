import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-profession',
  templateUrl: './create-profession.page.html',
  styleUrls: ['./create-profession.page.scss'],
})
export class CreateProfessionPage implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm()
  }
  createForm(){
    this.form = this.formBuilder.group({
      profession: ['', [Validators.required]],
    });
  }
  ngOnInit() {
  }

}
