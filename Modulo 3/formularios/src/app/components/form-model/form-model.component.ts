import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {
  formModel:FormGroup;
  constructor() { 
    this.formModel= new FormGroup({
      nombre:new FormControl('',[]),
      email:new FormControl('',[
        Validators.required
      ]),
      edad:new FormControl('',[]),
      dni: new FormControl('', []),
      password:new FormControl('',[
        Validators.required
      ]),
      password2:new FormControl('',[]),
    }, [])
  }

  ngOnInit(): void {
  }

  getDataForm(){
    console.log(this.formModel.value)
  }

}
