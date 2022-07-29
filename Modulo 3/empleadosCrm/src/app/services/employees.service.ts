import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../db/employees.db';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private arrEmployees:Employee[]=[]
  constructor() { 
    this.arrEmployees=EMPLOYEES
  }
  
  getAll(){
    return this.arrEmployees;
  }
}
