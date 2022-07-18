import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  arrProducts:any[]=[]
  constructor() {
    this.arrProducts = [
      {id:1, title: 'leche', price: 0.50},
      {id:2, title: 'pan', price: 0.75},
      {id:3, title: 'agua', price: 2.50},
    ]
  }

  ngOnInit(): void {
  }

}
