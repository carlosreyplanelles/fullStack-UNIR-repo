import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Trabajo } from 'src/app/interfaces/trabajo.interface';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-trabajo-view',
  templateUrl: './trabajo-view.component.html',
  styleUrls: ['./trabajo-view.component.css']
})
export class TrabajoViewComponent implements OnInit {

  trabajo:Trabajo|any;
  constructor(private trabajosService:TrabajosService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
      let url = params.url;
      this.trabajo = this.trabajosService.getByUrl(url);
    })
  }

}
