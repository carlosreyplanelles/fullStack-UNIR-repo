import { Injectable } from '@angular/core';
import { ALUMNOS } from '../db/alumnos.db';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrAlumnos:Alumno[]=[];
  id:number = 3
  constructor() {
    this.arrAlumnos=ALUMNOS
   }
   getAll():Alumno[]{
    return this.arrAlumnos;
   }
   create(newAlumno:any):string{
    newAlumno.id=this.id++
    this.arrAlumnos.push(newAlumno)
    return "Alumno insertado"
   }
}
