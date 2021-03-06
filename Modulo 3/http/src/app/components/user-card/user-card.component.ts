import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() myUser!:User;
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(id:number| undefined):void{
    if(id != undefined){
      console.log(id)
    }
  }

}
