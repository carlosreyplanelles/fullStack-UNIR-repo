import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newAlumno: any
  constructor(private alumnosService:AlumnosService) { 
    this.newAlumno={
      nombre:"",
      email:"",
      edad:0,
      curso:"",
    }
  }

  recogerDatos(){
    let response = this.alumnosService.create(this.newAlumno)
    alert(response);
  }
  ngOnInit(): void {
  }

}
