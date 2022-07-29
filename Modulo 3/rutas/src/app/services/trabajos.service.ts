import { Injectable } from '@angular/core';
import { TRABAJOS } from '../db/trabajos.db';
import { Trabajo } from '../interfaces/trabajo.interface';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  private arrTrabajos: Trabajo[] = []
  constructor() { 
    this.arrTrabajos= TRABAJOS;
  }

  getAll(){
    return this.arrTrabajos;
  }

  getByUrl(url:string): Trabajo|any{
   return this.arrTrabajos.find(trabajo=>trabajo.url === url);
  }
}
