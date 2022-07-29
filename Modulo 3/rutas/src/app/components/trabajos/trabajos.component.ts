import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/interfaces/trabajo.interface';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  trabajos: Trabajo[]=[]
  constructor(private trabajosService:TrabajosService) { }

  ngOnInit(): void {
    this.trabajos=this.trabajosService.getAll();
  }
  cargarDetalle(){
    
  }

}
