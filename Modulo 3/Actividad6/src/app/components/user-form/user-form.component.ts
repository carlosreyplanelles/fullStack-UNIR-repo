import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  operation:string = "Guardar";
  userForm:FormGroup;
  
  constructor(private usersService:UsersService,
    private activatedRoute:ActivatedRoute) {
    this.userForm = new FormGroup({
      email: new FormControl('', []),
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      username:new FormControl('', []),
      image: new FormControl('', []),
    }, [])
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params:any)=>{
      
      if (params.userId !== undefined){
        let userid:number = parseInt(params.userId)
        this.operation = "Actualizar"
        let user = await this.usersService.getById(userid);
        this.userForm = new FormGroup({
          email: new FormControl(user.email, []),
          first_name: new FormControl(user.first_name, []),
          last_name: new FormControl(user.last_name, []),
          username:new FormControl(user.username, []),
          image: new FormControl(user.image, []),
        }, [])
      }
    })
  }

  async getDataForm() {
    this.activatedRoute.params.subscribe(async (params:any)=>{
      let newUser = this.userForm.value;
      let response!: User

      if (params.userId !== undefined){
        newUser.id = parseInt(params.userId)
        response = await this.usersService.update(newUser)
        if (response.id){
          alert("El usuario ha sido actualizado correctamente.")
        } else {
          alert("Ha ocurrido un error intentelo de nuevo más tarde")
        }
      } else {
        response = await this.usersService.create(newUser)
        if (response.id){
          alert("El usuario ha sido creado correctamente.")
        } else {
          alert("Ha ocurrido un error intentelo de nuevo más tarde")
        }
      }
    })
  }

}
